import { NextFunction, Request, Response } from "express";
//import jwt from 'jsonwebtoken';


interface MyRequest extends Request {
    userId?: string;
}
/*
interface DecodedToken {
    userId?: string;
    // Other properties as needed
}
*/


export const authMiddleware = (req: MyRequest, _res: Response, next: NextFunction) => {
    try {

        //const token = req.headers.authorization ?? '';
        //  const decodedToken = jwt.decode(token) as DecodedToken;
        req.userId = '24';


        next();
    } catch (error) {
        _res.status(401).json({ message: 'No autorizado' });
    }
};
