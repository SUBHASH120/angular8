export interface Register {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    mobile: string;
    address: string;
}

export interface Update {
    firstname: string;
    lastname: string;
    email: string;
    mobile: string;
    address: string;
}
export interface ILogin {
    email: string;
    password: string;
}
