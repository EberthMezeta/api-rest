
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config/config';

export const generateToken = (username: string, password: string) => {
    const payload = {
        username,
        role: password,
    };

    const token = jwt.sign(payload, SECRET_KEY);

    return token;
}