import { User } from "../entity/User";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";

export const getAllUsers = async (_req: Request, res: Response) => {
    try {
        const userRepository = AppDataSource.getRepository(User);
        const allUsers = await userRepository.find();
        res.json(allUsers);
    } catch (error) {
        res.status(500).json({ error: "Error fetching users" });
    }
};

export const getUserById = async (req: Request, res: Response) => {
    try {
        const userId = parseInt(req.params.id);
        const userRepository = AppDataSource.getRepository(User);
        const user = await userRepository.findOne({ where: { id: userId } });

        if (!user) {
            res.status(404).json({ error: "User not found" });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "Error fetching user" });
    }
};

export const createUser = async (req: Request, res: Response) => {
    try {
        const { username, firstName, lastName, age, password } = req.body;
        const userRepository = AppDataSource.getRepository(User);
        const newUser = userRepository.create({
            username,
            firstName,
            lastName,
            age,
            password,
        });
        await userRepository.save(newUser);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: "Error creating user" });
    }
};

export const updateUser = async (req: Request, res: Response) => {
    try {
        const userId = parseInt(req.params.id);
        const { firstName, lastName, age, password } = req.body;

        const userRepository = AppDataSource.getRepository(User);
        const user = await userRepository.findOne({ where: { id: userId } });

        if (!user) {
            res.status(404).json({ error: "User not found" });
        } else {
            userRepository.merge(user, {
                firstName,
                lastName,
                age,
                password,
            });
            await userRepository.save(user);
            res.json(user);
        }
    } catch (error) {
        res.status(400).json({ error: "Error updating user" });
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const userId = parseInt(req.params.id);
        const userRepository = AppDataSource.getRepository(User);
        const user = await userRepository.findOne({ where: { id: userId } });

        if (!user) {
            res.status(404).json({ error: "User not found" });
        } else {
            await userRepository.remove(user);
            res.json({ message: "User deleted successfully" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error deleting user" });
    }
};
