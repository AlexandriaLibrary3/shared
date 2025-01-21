export type LoginDTO = {
    email: string;
    password: string;
}

export type RegisterDTO = {
    email: string;
    password: string;
}

export type GenerateOtpDTO = {
    email: string;
}

export type VerifyOtpDTO = {
    email: string;
    otp: string;
}

/** @Response */

export type JwtResourceDTO = {
    accessToken: string;
    expiresIn: number;
    refreshToken: string;
}
