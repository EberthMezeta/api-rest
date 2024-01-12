import express from 'express';
import { createAnime, deleteAnime, getAllAnime, getAnimeById, updateAnime } from '../controllers/AnimeController';

const animeRouter = express.Router();

animeRouter.get('/anime', getAllAnime);
animeRouter.get('/anime/:id', getAnimeById);
animeRouter.post('/anime', createAnime);
animeRouter.patch('/anime/:id', updateAnime);
animeRouter.delete('/anime/:id', deleteAnime);

export default animeRouter;
