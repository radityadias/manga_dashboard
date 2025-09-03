import type { Request, Response } from 'express';
import axios from 'axios';

const baseUrl = "https://api.mangadex.dev/"

export const getLatestUpdates = async (req: Request, res: Response) => {
    try {
        const data = await axios.get(`${baseUrl}/latest`);
        res.json(data.data);
    }
    catch (e) {
        console.error(e);
        res.status(500).json({
            message: "Internal Server Error",
        })
    }
}