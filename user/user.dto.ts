
export type UpdateProfileDTO = {
    nickname: string;
    bio: string;
    favoriteIds: string[];
}

export type UpdatePasswordToOtpDTO = {
    otp: string;
    email: string;
    password: string;
}

export type UpdatePasswordDTO = {
    currentPassword: string;
    newPassword: string;
}

export type ResetDataDTO = {
    otp: string;
}

export type WithdrawDTO = ResetDataDTO;

/** @Response */

export type IsEmailTakenResultDTO = {
    isDuplicated: boolean;
}

export type ProfileResultDTO = {
    id: string;
    nickname: string;
    bio: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}
