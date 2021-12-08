export class User{
    public id?: number|undefined;
    public email:string|undefined;
    public password?:string;
    public password_confirmation?:string;
    public email_verified_at?:string;
    public protectora:boolean|undefined;
    public created_at?: string;
    public updated_at?: string;

    constructor(id?: number | undefined, email?: string | undefined,protectora?: boolean | undefined,) {
        this.id = id;
        this.email = email;
        this.protectora = protectora
      }
}