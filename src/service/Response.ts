import Constant from '../config/Constant';
import {Deserialize} from 'cerialize';

/**
 * Created by cahyo on 20/02/19
 */
export default class Response {

  private data: any;

  private readonly rows: any;

  private readonly response: any;

  private readonly status: any;

  private readonly serializer: any;

  private statusSuccess: Array<string> = [
    Constant.STATUS.API.SAVE_SUCCESS,
    Constant.STATUS.API.UPDATE_SUCCESS,
    Constant.STATUS.API.DELETE_SUCCESS,
    Constant.STATUS.API.UPLOAD_SUCCESS,
    Constant.STATUS.API.LOGIN_SUCCESS,
    Constant.STATUS.API.OPERATION_COMPLETE,
    Constant.STATUS.API.VALID_CODE,
  ];

  constructor(param: any = null) {
    const valid: boolean = typeof param === 'object' && Object.keys(param).length > 0;

    if (valid) {
      const {data, status, rows, serializer} = param;

      this.response = param;

      this.status = typeof status === 'string' && Boolean(status) ? status : null;

      this.data = Boolean(data) ? data : null;

      this.rows = typeof rows === 'number' && Boolean(rows) ? rows : null;

      this.serializer = typeof serializer === 'function' && Boolean(serializer) ? serializer : null;
    }
  }

  /**
   * Cek either response contain status or data
   * usually on get response.status is empty
   */
  public get isSuccess() {
    return this.statusSuccess.indexOf(this.status) !== -1 || this.hasValidData;
  }

  public get isResponseSuccess() {
    return this.statusSuccess.indexOf(this.status) !== -1;
  }

  public get statusResponse() {
    return this.status;
  }

  public get hasValidData(): boolean {
    return Boolean(this.data) && (typeof this.data === 'object' || Array.isArray(this.data));
  }

  public getResponse(defaultValue: any = {}) {
    return Boolean(this.response) ? this.response : defaultValue;
  }

  public getData(defaultValue: any = null) {
    return this.hasValidData ? this.data : defaultValue;
  }

  public getOriginalData(defaultValue: any = null) {
    return this.data || defaultValue;
  }

  public getRows(defaultValue: number = 0) {
    return Boolean(this.rows) ? this.rows : defaultValue;
  }

  public getDeserializeResponse(defaultValue: any = null, serializer: any = null) {
    const containSerializer = [serializer, this.serializer].some((item: any) =>
      typeof item === 'function');

    if (!this.hasValidData || !containSerializer) {
      return defaultValue;
    }

    const fixedSerializer: any = serializer ? serializer : this.serializer ? this.serializer : null;

    return Deserialize(this.data, fixedSerializer);
  }

}