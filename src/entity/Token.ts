import BaseEntity from "@/entity/BaseEntity";
import { deserialize, inheritSerialization, serialize } from "cerialize";

@inheritSerialization(BaseEntity)
export default class Token extends BaseEntity {

    @serialize
    @deserialize
    public refreshToken: string = '';

    @serialize
    @deserialize
    public type: string = '';

    @serialize
    @deserialize
    public expiration: number = 0;

    @serialize
    @deserialize
    public accessToken: string = '';

}
