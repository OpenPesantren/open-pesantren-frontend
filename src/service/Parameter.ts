import {Serialize} from 'cerialize';
import EntityAware from "../entity/EntityAware";
import Storage from "@/store/Storage";
import Constant from "@/config/Constant";

/**
 * Created by cahyo on 20/02/19
 */
export default class Parameter {

  private data: any = null;

  private header: object = {
    'Content-Type': 'application/json'
  };

  private auth: object = {
    username: Storage.getCookie().get(Constant.KEY_USERNAME),
    password: Storage.getCookie().get(Constant.KEY_PASSWORD)
  }

  private url: string = '';

  public static methods: any = {
    DELETE: 'DELETE',
    POST: 'POST',
    GET: 'GET',
    PUT: 'PUT',
  };

  public method: any = Parameter.methods.GET;

  public showNotification: boolean = true;

  constructor(data: any = null) {
    const valid: boolean = ['number', 'string', 'object']
      .some((item: string) => typeof data === item);

    if (valid) {
      this.data = data;
    }
  }

  public setMethod(value: any) {
    this.method = value;

    return this;
  }

  public setEnableNotification(param: boolean) {
    this.showNotification = param;

    return this;
  }

  public setHeader(header: any = null) {
    if (header) {
      this.header = Object.assign({}, this.header, header);
    }

    return this;
  }

  public setUrl(value: string, suffix: any = null) {
    const valid = value && value.length;

    if (valid) {
      this.url = value;
    }

    const validStringSuffix: boolean = Boolean(suffix) && typeof suffix === 'string' || typeof suffix === 'number';
    const validObjectSuffix: boolean = Boolean(suffix) && Object.keys(suffix).length > 0;

    if (validStringSuffix) {
      this.url = this.url + suffix;
    } else if (validObjectSuffix) {
      let stringSuffix = Object.keys(suffix).reduce((accu: string, item: string, index: number) => {
        return accu + `${(index === 0) ? '?' : '&'}${item}=${suffix[item]}`;
      }, '');

      this.url = this.url + stringSuffix;
    }

    return this;
  }

  public getUrl() {
    return this.url;
  }

  public getAuth() {
    if (this.url.includes('login') || this.url.includes('register')) {
      return null;
    }

    return this.auth;
  }

  public getHeader() {
    if (this.data && this.data instanceof FormData && this.header['Content-Type']) {
      this.header['Content-Type'] = false;
    }

    this.header['Access-Control-Allow-Origin'] = 'http://localhost:8080';
    return this.header;
  }

  public getMethod() {
    return this.method;
  }

  public getData() {
    return this.data;
  }

  public serializeData(serializer: EntityAware = null) {
    if (serializer) {
      this.data = Serialize(this.data, serializer);
    }

    return this;
  }
}
