import { config } from "dotenv";

config();
console.log(process.env.SECRET_KEY);

export const PORT = process.env.PORT;
export const DB_HOST = process.env.DB_HOST;
export const DB_PORT = process.env.DB_PORT;
export const DB_DATABASE = process.env.DB_DATABASE;
export const DB_USERNAME = process.env.DB_USERNAME;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_TYPE = process.env.DB_TYPE;
export const SECRET_KEY = process.env.SECRET_KEY ?? "empanizado";
