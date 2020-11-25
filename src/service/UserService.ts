import {Singleton} from "typescript-ioc";
import ProxyService from './Proxy';
import EntityAware from "@/entity/EntityAware";
import User from "@/entity/User";
import Parameter from "@/service/Parameter";
import Response from "./Response";

@Singleton
export default class UserService extends ProxyService {

  public api: string = '/users';

  public serializer: EntityAware = User;

  public doLogin(entity: User): Promise<any> {
    const payload = {username: entity.username, password: entity.password};

    const parameter: Parameter = new Parameter(payload)
    .setMethod(Parameter.methods.POST)
    .setUrl(this.api + "/login");
    
    parameter.showNotification = false;

    return super.request(parameter).then((response: Response) => {
      if (response.isSuccess) {
        /* const user: User = Deserialize(response.getData(), User);
        Storage.getLocalStorage().set("menu", menus); */
      }

      return response;

    })
  }

  public signup(param: User): Promise<any> {
    const parameter: Parameter = new Parameter(param).setMethod(Parameter.methods.POST).setUrl(this.api + "/register");
    return super.request(parameter).then((response: Response) => {
      return response;
    });
  }

}


