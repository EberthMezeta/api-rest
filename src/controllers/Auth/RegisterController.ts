import { Request, Response } from "express";
import { User } from "../../entity/User";
import { AppDataSource } from "../../data-source";
import bcrypt from "bcrypt";

export const register = async (req: Request, res: Response) => {
    try {
        const { username, firstName, lastName, age, password } = req.body;

        const userRepository = AppDataSource.getRepository(User);

        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(password, saltRounds);
        console.log(passwordHash);

        const newUser = userRepository.create({
            username,
            password: passwordHash,
            firstName,
            lastName,
            age,
        });

        await userRepository.save(newUser);

        res.json({ message: "User registered successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error registering user" });
    }
};