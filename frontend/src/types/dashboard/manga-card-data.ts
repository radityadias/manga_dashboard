export interface MangaCardData {
    id: number;
    image: string;
    title: string;
    genre?: string[];
    rating?: number;
    status?: string;
    description?: string;
    language?: string;
    author?: string;
    newChapter?: {
        language: string;
        chapter: string;
        releaseTime: string;
        scanlation: string;
    }[];
}