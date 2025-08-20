export interface UpdateData {
    id: number;
    image: string;
    title: string;
    newChapter: {
        language: string;
        chapter: string;
        releaseTime: string;
    }[];
    author: string;
    scanlation: string;
}