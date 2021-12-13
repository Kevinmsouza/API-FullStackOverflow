import { v4 as uuid } from 'uuid';
import { NewUser } from '../interfaces/usersInterface';
import * as userRepository from '../repositories/usersRepository';

async function newUser(user: NewUser) {
    const token = uuid();
    return userRepository.newUser({ ...user, token });
}

export {
    newUser,
};
