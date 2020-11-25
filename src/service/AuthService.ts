import EntityAware from '@/entity/EntityAware';
import Token from '@/entity/Token';
import User from '@/entity/User';
import { Deserialize } from 'cerialize';
import { Singleton } from 'typescript-ioc';
import Parameter from './Parameter';
import ProxyService from './Proxy';
import Response from './Response';
import Storage from "@/store/Storage";

@Singleton
export default class AuthService extends ProxyService {

    public api: string = '/auth';

    public serializer: EntityAware = Token;

    public doLogin(entity: User): Promise<any> {
        const payload = { username: entity.username, password: entity.password };

        const parameter: Parameter = new Parameter(payload)
            .setMethod(Parameter.methods.POST)
            .setUrl(this.api + "/token");

        parameter.showNotification = false;

        return super.request(parameter).then((response: Response) => {
            if (response.isSuccess) {
                const token: Token = Deserialize(response.getData(), Token);
                Storage.getLocalStorage().set("token", token);
            }

            return response;
        })
    }

}