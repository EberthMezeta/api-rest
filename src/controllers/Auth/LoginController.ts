import jwt from 'jsonwebtoken'; // Ensure you have jwt installed
import { AppDataSource } from '../../data-source';
import { Request, Response } from 'express';
import { User } from '../../entity/User';
import bcrypt from "bcrypt";
import { SECRET_KEY } from '../../config/config';

export const login = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;

        const userRepository = AppDataSource.getRepository(User);
        const user = await userRepository.findOne({ where: { username } });

        if (!user) {
            res.status(401).json({ message: "Invalid username or password" });
            return;
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            res.status(401).json({ message: "Invalid username or password" });
            return;
        }

        // Generate JWT
        const token = jwt.sign({ userId: user.id }, SECRET_KEY, {
            expiresIn: '1h', // Set appropriate expiration time
        });

        res.json({ message: "Login successful", token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error logging in" });
    }
};
