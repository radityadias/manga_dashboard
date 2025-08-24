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
            className="p-1 sm:p-2 bg-main-foreground rounded-sm text-white hover:text-yellow-primary active:text-yellow-primary/70"
        >
            <span>
                <p className="text-sm">{item.name}</p>
            </span>
        </Link>
    )
}