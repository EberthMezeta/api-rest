
import express from 'express';
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from '../controllers/UserController';

const userRouter = express.Router()

userRouter.get('/user', getAllUsers);
userRouter.get('/user/:id', getUserById);
userRouter.post('/user', createUser);
userRouter.patch('/user/:id', updateUser);
userRouter.delete('/user/:id', deleteUser);


export default userRouter;