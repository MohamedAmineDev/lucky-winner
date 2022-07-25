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
export class Player {
    username: string;
    password: string;
    email: string;
    address: string;
    constructor(username: string, password: string, email: string, address: string) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.address = address;
    }
}