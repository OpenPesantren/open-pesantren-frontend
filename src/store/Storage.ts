import Vue from "vue";
import base64 from "base-64";
import cryptoJS from "crypto-js";
import jsCookie from "js-cookie";
import SecureLS from "secure-ls";

/**
 * Created by fajar on 01/15/2019.
 *
 * Common storage to manage local storage
 * or cookie with same command method
 */
interface StorageHandler {
  get(key?: string | null, callback?: Function): any

  set(key: string, value: any, callback?: Function): any

  remove(key?: string, callback?: Function): any
}

export default class Storage {

  private static key: string = "⪂恢恢⪂鐁䰁ڰځ᠍䁏ǘᗌ惀䄁�琩";

  private static keyName: string = "5UK3ND4009";

  private static localStorage: Object | any = null;

  private static cookie: Object | any = null;

  private static adapter: Object = {};

  private static expires: number = 3 / 24; // 3jam

  private static vm: Vue = null;

  /**
   * Get adapter get/set/remove of cookie instance,
   * get default value and wrap to configure encrypt decrypt
   * with two way data binding from vue instance and
   * active when get instance only
   *
   * @return Storage.createHandler
   */
  public static getCookie() {
    if (Storage.cookie === null) {
      Storage.cookie = {
        get: (value: string | any) => {
          value = jsCookie.get(Storage.keyName);

          if (typeof value === "string") {
            value = base64.decode(value).split("").reverse().join("");
            value = cryptoJS.AES.decrypt(value.toString(), Storage.key.split("").reverse().join(""));
            value = JSON.parse(value.toString(cryptoJS.enc.Utf8));
          }

          return value;
        },
        set: (param: string) => {
          param = JSON.stringify(param);
          param = cryptoJS.AES.encrypt(param, Storage.key.split("").reverse().join("")).toString();
          param = base64.encode(param.split("").reverse().join(""));

          jsCookie.set(Storage.keyName, param, {expires: Storage.expires});
        },
        remove: () => jsCookie.remove(Storage.keyName)
      };
    }

    if (Storage.getVm().$data.cookie === null) {
      Storage.getVm().$set(Storage.getVm().$data, "cookie", Storage.cookie.get() || {});
    }

    return Storage.createHandler("cookie");
  }

  public static isCookieExpired() {
    return (jsCookie.get(Storage.keyName) || '').length === 0;
  }

  /**
   * Get adapter get/set/remove of localStorage instance,
   * get default value and wrap to configure encrypt decrypt
   * with two way data binding from vue instance and
   * active when get instance only
   *
   * @return Storage.createHandler
   */
  public static getLocalStorage() {
    if (Storage.localStorage === null) {
      const secureLS: any = new SecureLS({
        encryptionSecret: Storage.key,
        isCompression: true,
        encodingType: "rc4"
      });

      Storage.localStorage = {
        get: () => secureLS.get(Storage.keyName),
        set: (param: string) => secureLS.set(Storage.keyName, param),
        remove: () => secureLS.remove(Storage.keyName)
      }
    }

    if (Storage.getVm().$data.localStorage === null) {
      Storage.getVm().$set(Storage.getVm().$data, "localStorage", Storage.localStorage.get() || {});
    }

    return Storage.createHandler("localStorage");
  }

  /**
   * Get two way data binding from vue instance
   *
   * @return Vue
   */
  private static getVm() {
    if (Storage.vm === null) {
      Storage.vm = new Vue({
        data: {
          localStorage: null,
          cookie: null
        }
      });
    }

    return Storage.vm;
  }

  /**
   * Create binding get/set/remove as universal command
   *
   * @return {Object} get/set/remove
   */
  private static createHandler(type: string): StorageHandler {
    if (!Storage.adapter[type]) {
      if (type !== "filesystem") {
        Storage.adapter[type] = {
          get: (key: string = "", callback: Function = null) => {
            key = key === null ? "" : key;

            const result: any = key === "" ? Storage.getVm().$data[type] : Storage.getVm().$data[type][key];

            return (typeof callback === "function") ? callback(result) : result;
          },
          set: (key: string, value: any, callback: Function = null) => {
            Storage.getVm().$set(Storage.getVm().$data[type], key, value);

            Storage[type].set(Storage.getVm().$data[type]);

            if (typeof callback === "function") {
              callback(Storage.getVm().$data[type]);
            }
          },
          remove: (key: string = "", callback: Function = null) => {
            if (key !== "") {
              Storage.getVm().$delete(Storage.getVm().$data[type], key);

              Storage[type].set(Storage.getVm().$data[type]);
            } else {
              Storage.getVm().$set(Storage.getVm().$data, type, {});

              Storage[type].remove();
            }

            if (typeof callback === "function") {
              callback(Storage.getVm().$data[type]);
            }
          }
        };
      } else {
        const defaultHandler: Function = (action: string, callback: Function, param1: string, param2: string) => {
          return Storage[type][action](param1, param2)
            .then((result: any) => (typeof callback === "function") ? callback(result) : result)
            .catch((error: any) => {
              console.log("filesystem error", error);

              return (typeof callback === "function") ? callback(null) : null;
            });
        };

        Storage.adapter[type] = {
          get: (key: string, callback: Function) => defaultHandler("get", callback, key),
          set: (key: string, value: any, callback: Function) => defaultHandler("set", callback, key, value),
          remove: (key: string, callback: Function) => defaultHandler("remove", callback, key)
        };
      }
    }

    return Storage.adapter[type];
  }
}
