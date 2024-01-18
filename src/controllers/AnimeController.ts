import { Anime } from "../entity/Anime";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";




export const getAllAnime = async (_req: Request, res: Response) => {
    try {
        const animeRepository = AppDataSource.getRepository(Anime);
        const allAnime = await animeRepository.find();
        res.json(allAnime);
    } catch (error) {
        res.status(500).json({ error: "Error fetching anime" });
    }
};

export const getAnimeById = async (req: Request, res: Response) => {
    try {
        const animeId = parseInt(req.params.id);
        const animeRepository = AppDataSource.getRepository(Anime);
        const anime = await animeRepository.findOne({ where: { id: animeId } });

        if (!anime) {
            return res.status(404).json({ error: "Anime not found" });
        }

        res.json(anime);
    } catch (error) {
        return res.status(500).json({ error: "Error fetching anime" });
    }
};

export const createAnime = async (req: Request, res: Response) => {
    try {
        console.log(req.body.userId);

        const { title, description } = req.body;
        const animeRepository = AppDataSource.getRepository(Anime);
        const newAnime = animeRepository.create({
            title,
            description,
        });
        await animeRepository.save(newAnime);
        res.status(201).json(newAnime);
    } catch (error) {
        res.status(400).json({ error: "Error creating anime" });
    }
};

export const updateAnime = async (req: Request, res: Response) => {
    try {
        const animeId = parseInt(req.params.id);
        const { title, description } = req.body;

        const animeRepository = AppDataSource.getRepository(Anime);
        const anime = await animeRepository.findOne({ where: { id: animeId } });

        if (!anime) {
            res.status(404).json({ error: "Anime not found" });
        } else {
            animeRepository.merge(anime, {
                title,
                description,
            });
            await animeRepository.save(anime);
            res.json(anime);
        }
    } catch (error) {
        res.status(400).json({ error: "Error updating anime" });
    }
};

export const deleteAnime = async (req: Request, res: Response) => {
    try {
        const animeId = parseInt(req.params.id);
        const animeRepository = AppDataSource.getRepository(Anime);
        const anime = await animeRepository.findOne({ where: { id: animeId } });

        if (!anime) {
            res.status(404).json({ error: "Anime not found" });
        } else {
            await animeRepository.remove(anime);
            res.json({ message: "Anime deleted successfully" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error deleting anime" });
    }
};
