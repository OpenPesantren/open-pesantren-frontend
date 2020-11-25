import BaseEntity from "@/entity/BaseEntity";
import { deserialize, inheritSerialization, serialize } from "cerialize";

@inheritSerialization(BaseEntity)
export default class User extends BaseEntity {

    @serialize
    @deserialize
    public username: string = '';

    @serialize
    @deserialize
    public password: string = '';

    @serialize
    @deserialize
    public email: string = '';

    @serialize
    @deserialize
    public profile: string = '';

    @serialize
    @deserialize
    public enabled: boolean = false;

    @serialize
    @deserialize
    public image: string = '';

    @serialize
    @deserialize
    public refreshToken: string = '';

    @serialize
    @deserialize
    public roles: Array<string> = [];

}
