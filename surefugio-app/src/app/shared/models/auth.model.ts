import { User } from "./user.model";

export class Auth{
    access_token: string;
    token_type:string;
    expires_in: number;
    user: User;
}