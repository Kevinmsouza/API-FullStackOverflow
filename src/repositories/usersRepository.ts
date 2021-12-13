import connection from '../database';
import { NewUser, UserToken } from '../interfaces/usersInterface';

async function newUser(user: NewUser): Promise<UserToken> {
    const { name, className, token } = user;
    const result = await connection.query(`
        INSERT INTO users
            (name, class, token)
        VALUES ($1, $2, $3)
        RETURNING token
    ;`, [name, className, token]);
    return result.rows[0];
}

export {
    newUser,
};
