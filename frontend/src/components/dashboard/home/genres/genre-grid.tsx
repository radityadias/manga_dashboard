// Types
import {GenreData} from "@/types/dashboard/genre-data";

// Components
import GenreItem from "@/components/dashboard/home/genres/genre-item";

// Interfaces
interface GenreGridProps {
    items: GenreData[];
}

export default function GenreGrid({items} : GenreGridProps) {
    return (
        <div className="flex items-center gap-2 flex-wrap">
            {items.map(item => (
                <GenreItem item={item} key={item.id} />
            ))}
        </div>
    )
}