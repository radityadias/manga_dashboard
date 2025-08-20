// Types
import {GenreData} from "@/types/dashboard/genre-data";

// Components
import GenreGrid from "@/components/dashboard/home/genres/genre-grid";

// Interfaces
interface GenreProps {
    data: GenreData[];
}

export default function Genre({data} : GenreProps) {
    return (
        <>
            <div className="w-full ">
                <h2 className="text-2xl font-semibold mb-4">Genres</h2>
                <GenreGrid items={data} />
            </div>
        </>
    )
}