import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';
import { SECRET_KEY } from "../config/config";

interface CustomRequest extends Request {
    userId: string;
}


export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const customReq = req as CustomRequest;
    try {
        const token = req.headers.authorization?.replace('Bearer ', '');
        console.log(token);

        if (!token) {
            return res.status(401).json({ message: 'No se ha proporcionado un token' });
        }

        const decodedToken = jwt.verify(token, SECRET_KEY) as JwtPayload;
        customReq.userId = decodedToken.userId;

        next();
    } catch (error) {
        console.error(error); // Log the error for debugging
        return res.status(401).json({ message: 'Token inválido' });
    }
};
