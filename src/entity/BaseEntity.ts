/**
 * Created by fajar on 01/26/2018.
 *
 * Entity base for reusable logic on child
 * with rule logic for serialize (wrapping) and
 * deserialize (explain) property
 */

import {deserialize, serialize} from 'cerialize';
import EntityAware from "./EntityAware";

export default class BaseEntity implements EntityAware {

  @serialize
  @deserialize
  public id: number = 0;

  /*
    * default feedback on some false value on property
    * make sure the property is number or string
    * */
  public defaultPropertyFeedback(property: string, validProp: any = null, paramMessage: string = '') {
    let valid = typeof validProp === 'boolean' ? validProp : Boolean(this[property]);
    let message: string;
    const type = valid ? 'success' : 'danger';

    if (paramMessage)  {
      message = paramMessage;
    } else {
      message = valid ? '' : 'Text must not empty'
    }

    return {valid, type, message};
  }

  public static OnSerialized(instance: BaseEntity, json: any): void {
    if (parseInt(json.id) === 0) {
      delete json.id;
    }
  }
}
