import { MangaArray } from "@/types/dashboard/manga-card-data";

const API_BASE_URL = "https://api.mangadex.dev";

export const fetchManga = async () : Promise<MangaArray[]> => {
    const response = await fetch(`${API_BASE_URL}/manga`);

    if (!response.ok) {
        throw new Error("Failed to fetch manga");
    }

    const data: MangaArray[] = await response.json();
    return data;
}