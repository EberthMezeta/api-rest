import express from 'express'
import animeRouter from './routes/AnimeRouter';
import './config/dbConnection'
import userRouter from './routes/UserRouter';
import authRouter from './routes/AuthRouter';

const app = express();
app.use(express.json());


app.use("/api/", animeRouter);
app.use("/api/", authRouter)
app.use("/api/", userRouter)

export default app;