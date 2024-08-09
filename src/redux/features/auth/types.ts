export interface UserProps {
    email: string;
    password: string;
    profile?: {
        firstName?: string;
        lastName?: string;
        phoneNumber?: string;
        profileImage?: string;
        socialMedia?: {
            facebookId?: string;
            googleId?: string;
        };
    };
}

export interface LoginUserInputProps {
    password: string;
    email: string;
}

export interface RegistrationInputProps {
    email: string;
    password: string;
    confirmPassword: string;
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
}

export interface RegistrationResponseProps {
    success: boolean;
    message?: string;
}

export interface authStateProps {
    userInfo: UserProps | null;
}

export interface resTypeProps {
    success: true;
    userInfo: UserProps;
}
