// Types
import {PopularData} from "@/types/dashboard/popular-data";

// Components
import PopularManga from "./popular-manga";

// Interfaces
interface PopularGridProps {
    items: PopularData[];
}

export default function PopularGrid({items} : PopularGridProps) {
    return (
        <div className="h-full p-2">
            <div className="grid grid-rows-5 gap-2">
                {items.map((item) => (
                    <PopularManga item={item} key={item.id} />
                ))}
            </div>
        </div>
    )
}