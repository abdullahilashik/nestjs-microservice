export interface IUser {
    id: string;
    email: string;
    name: string;
    password: string;
}

export interface IAuthUseer extends Pick<IUser, 'id' | 'email'> {
    roles: string[]
}