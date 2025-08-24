import Link from "next/link";

// Types
import {PopularData} from "@/types/dashboard/popular-data";

// Components
import Image from "next/image";

// Interfaces
interface PopularMangaProps {
    item: PopularData;
}

export default function PopularManga({item} : PopularMangaProps) {
    return (
        <Link href="#" className="grid grid-cols-3 gap-1 h-28 hover:scale-105 transform duration-300 group" key={item.id}>
            {/* Manga Image */}
            <div className="col-span-1">
                <Image
                    key={item.id}
                    src={item.image}
                    alt={item.title}
                    width={75}
                    height={100}
                    className="object-cover w-full h-full rounded-md"
                />
            </div>

            {/* Manga Genres */}
            <div className="col-span-2 flex flex-col gap-1">
                <p className="font-medium text-medium group-hover:text-yellow-primary">{item.title}</p>
                <p className="text-sm">
                    Genres: {item.genre.map((genre, index) => (
                    <span key={index}>{genre}{index < item.genre.length - 1 ? ', ' : ''}</span>
                ))}
                </p>
            </div>
        </Link>
    )
}