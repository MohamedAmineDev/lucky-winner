export interface SignInUser {
    email: string;
    password: string;
}
export class User {
    email: string;
    password: string;
    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}