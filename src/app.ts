import express from 'express'
import animeRouter from './routes/AnimeRouter';
import './config/dbConnection'

const app = express();
app.use(express.json());

app.use("/api/", animeRouter);

export default app;