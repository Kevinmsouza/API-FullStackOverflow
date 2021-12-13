interface NewUser {
    name: string;
    className: string;
    token?: string;
}

interface UserToken {
    token: string;
}

export {
    NewUser,
    UserToken,
};
