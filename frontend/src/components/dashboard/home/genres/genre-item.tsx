import Link from "next/link";

// Types
import {GenreData} from "@/types/dashboard/genre-data";

// Interfaces
interface GenreItemProps {
    item: GenreData;
}

export default function GenreItem({item} : GenreItemProps ) {
    return (
        <Link
            href="#"
            className="p-1 sm:p-2 bg-gray-200 rounded-sm"
        >
            <span>
                <p className="text-sm">{item.name}</p>
            </span>
        </Link>
    )
}