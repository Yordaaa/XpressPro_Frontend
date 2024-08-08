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

export interface CreateUserInputProps {
    password: string;
    email: string;
}

export interface authStateProps {
    userInfo: UserProps | null;
}

export interface resTypeProps {
    success: true;
    userInfo: UserProps;
}
