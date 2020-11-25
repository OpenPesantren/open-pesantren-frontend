import axios from 'axios';
import Response from './Response';
import Parameter from './Parameter';

import EntityAware from '../entity/EntityAware';
import Constant from "../config/Constant";

/**
 * Created by cahyo on 20/02/19
 */
interface BaseProxy {

  serializer: EntityAware;

  api: string;

  find(parameter: any): Promise<any>;

  save(parameter: any): Promise<any>;

  delete(id: string | number): Promise<any>;

  update(parameter: any, id: string | number): Promise<any>;

  request(parameter: any): any;
}

export default class Proxy implements BaseProxy {

  public api: string;

  public serializer: EntityAware;

  public find(param: any): Promise<any> {
    const parameter = new Parameter().setUrl(this.api, param);

    return this.request(parameter);
  }

  public save(param: any): Promise<any> {
    const parameter = new Parameter(param).setMethod(Parameter.methods.POST)
      .setUrl(this.api).serializeData(this.serializer);

    return this.request(parameter);
  }

  public delete(id: string | number = ''): Promise<any> {
    const parameter = new Parameter().setMethod(Parameter.methods.DELETE)
      .setUrl(this.api, id);

    return this.request(parameter);
  }

  public update(param: any, id: string | number = ''): Promise<any> {
    const parameter = new Parameter(param).setMethod(Parameter.methods.PUT)
      .setUrl(this.api + id).serializeData(this.serializer);

    return this.request(parameter);
  }

  public request(parameter: Parameter): any {
    let config: any = {
      auth: parameter.getAuth(),
      timeout: 1000,
      baseURL: '/api',
      method: parameter.getMethod(),
      url: parameter.getUrl(),
      headers: parameter.getHeader(),
      data: parameter.getData()
    };

    return axios(config).then((response: any) => {
      const hasStatusData: any = response.data && response.data.status;
      const fixedResponse: any = response.data && typeof response.data === 'object' ? response.data : {};
      const responseParameter: any = Object.assign({}, fixedResponse, {serializer: this.serializer});

      if (parameter.showNotification && hasStatusData && config.method !== Parameter.methods.GET) {
        // Notification.showNotification({status: response.data.status});
      }

      return new Response(responseParameter);
    }).catch((err: any) => {
      if (err.response && err.response.status) {
        /* Vue.notify({
          group: 'info',
          type: 'warn',
          title: 'Jaringan bermasalah',
          text: 'Mohon maaf atas ketidaknyamanan anda saat menggunakan aplikasi, Kami akan segera perbaiki masalah ini. ' +
            'Terima kasih sudah menggunakan aplikasi kami'
        }); */
      }

      return new Response({status: Constant.STATUS.API.DEFAULT_ERROR});
    });
  }

  /**
   * Download file using native xmlHttpRequest
   *
   * @remarks
   * If parameters contain file name, will auto download the file
   *
   * @param {string} url
   * @param {string} fileName
   * @param {boolean} returnAsFile
   * @param {string} formatFile
   * @returns
   */
  public downloadFile(url: string = '', fileName: string = '',
                      returnAsFile: boolean = false, formatFile: string = ''): Promise<any> {
    url = url ? url : this.api;

    return new Promise<any>((resolve, reject) => {
      const req = new XMLHttpRequest();

      req.open("GET", url, true);
      req.responseType = "blob";
      // req.setRequestHeader('Authorization', Authentication.getUser('token'));

      req.onload = function () {
        if (req.status > 300) {
          reject(new Error('failed fetch file'));

          return;
        }

        if (returnAsFile && formatFile && fileName.length > 0) {
          const type = {type: 'application/' + formatFile};
          const blob = new Blob([req.response], type);

          resolve(new File([blob], `${fileName}.${formatFile}`, type));
        } else if (fileName) {
          const link = document.createElement('a');
          link.href = window.URL.createObjectURL(req.response);
          link.download = fileName;

          if (navigator.userAgent.indexOf("Firefox") > 1) {
            document.body.append(link);
          }

          link.click();
          resolve();

          link.remove();
        } else {
          resolve(req.response);
        }
      };

      req.onerror = function (err) {
        reject(err);
      };

      req.send();
    });
  }
}
