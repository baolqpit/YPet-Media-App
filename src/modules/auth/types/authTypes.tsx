export interface LoginDto {
    email: string;
    password: string;
}

export interface RegisterDto {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    avatar: string;
    background: string;
    password: string;
}

export interface User {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    avatar: string;
    background: string;
}

export interface AuthResponse {
    user: User;
    token: string;
}
