import { create } from 'zustand'
import { MangaArray } from "@/types/dashboard/manga-card-data";
import { fetchManga } from "@/api/dashboardApi";

interface DashboardStore {
    manga: MangaArray[],
    loading: boolean,
    error: string | null,
    fetchManga: () => Promise<void>,
}

export const useDashboardStore = create<DashboardStore>((set) => ({
    manga: [],
    loading: false,
    error: null,

    fetchManga: async () => {
        set({loading: true, error: null});
        try {
            const data = await fetchManga();
            set({manga: data, loading: false});
        }
        catch (e) {
            set({error: (e as Error).message, loading: false});
        }
    },
}))