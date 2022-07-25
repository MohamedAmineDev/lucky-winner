export interface SignInUser {
    email: string;
    password: string;
}
export interface RegisterUser {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    address: string;
}
export class User {
    email: string;
    password: string;
    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}
export class Player extends User {
    username: string;
    address: string;
    constructor(username: string, email: string, address: string, password: string) {
        super(email, password);
        this.username = username;
        this.address = address;
    }
}