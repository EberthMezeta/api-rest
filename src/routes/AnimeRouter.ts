import express from 'express';
import { createAnime, deleteAnime, getAllAnime, getAnimeById, updateAnime } from '../controllers/AnimeController';
import { authMiddleware } from '../middleware/Auth';

const animeRouter = express.Router();



animeRouter.get('/anime', authMiddleware, getAllAnime);
animeRouter.get('/anime/:id', authMiddleware, getAnimeById);
animeRouter.post('/anime', authMiddleware, createAnime);
animeRouter.patch('/anime/:id', authMiddleware, updateAnime);
animeRouter.delete('/anime/:id', authMiddleware, deleteAnime);

export default animeRouter;
