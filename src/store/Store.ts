/**
 * Created by cahyo on 17/06/2019.
 */

import Vue from "vue";
import {get} from 'lodash';
import moment from "moment";

import Response from '../service/Response';

export default class Store {

  private static vm: any = null;

  private static intervalEachRequest: number = 60 * 3; // second

  private static getVm() {
    if (Store.vm === null) {
      Store.vm = new Vue({
        data: {
          users: {
            data: [],
            timestamp: null
          }
        }
      })
    }

    return Store.vm;
  }

  public static updateProperty(key: string, data: any, defaultValue: any = null) {
    if (get(Store.getVm().$data || {}, key, defaultValue) !== defaultValue) {
      Store.vm.$set(Store.getVm().$data, key, data);
    }
  }

  public static getVmProperty(key: string = '', defaultValue: any = null) {
    return get((Store.getVm().$data || {}), key, defaultValue) || defaultValue;
  }

  public static setVmProperty(key: string, value: any) {
    // only apply settled value if type of value is same as vm property
    // or the value from the vm property is null
    if (typeof Store.getVmProperty(key) === typeof value ||
      Store.getVmProperty(key) === null) {

      if (key.includes('.')) {
        const keys: Array<any> = key.split('.');
        let data: any = Store.vm.$data;

        keys.forEach((item: string, index: number) => {
          if (index <= keys.length - 2) {
            data = data[item]
          }
        });

        Vue.set(data, keys[keys.length - 1], value);
      } else {
        Vue.set(Store.vm.$data, key, value);
      }
    }
  }

  public static async dispatch(key: string, service: any, force: boolean = false,
                               param: any = null, method: string = 'find',
                               changeVals: (r: Response | any) => any = null) {

    if (key && service && service['find']) {
      const property: any = Store.getVmProperty(key);
      const fetchedTime: any = moment(property['timestamp'] || new Date());
      const diffPerRequest: any = moment(new Date()).diff(fetchedTime, 'second', true);
      const valid: boolean = Array.isArray(property['data']) && diffPerRequest < Store.intervalEachRequest;

      if ((!valid || property['timestamp'] === null) || force) {
        Store.setVmProperty(key + '.timestamp', new Date());

        const defaultValue: any = Array.isArray(Store.getVmProperty(key + '.datas')) ? [] : null;
        const response: Response = await service[method](param);
        let data: any;

        if (typeof changeVals === 'function') {
          data = changeVals(response);
        } else {
          data = response.getDeserializeResponse(defaultValue);
        }

        Store.setVmProperty(key + '.data', data);
      }
    }
  }
}
