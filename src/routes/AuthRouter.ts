import express from 'express';
import { register } from '../controllers/Auth/RegisterController';
import { login } from '../controllers/Auth/LoginController';

const authRouter = express.Router();

authRouter.post('/login', login);
authRouter.post('/register', register);

export default authRouter;