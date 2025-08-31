import Image from "next/image";
import Link from "next/link";

// Types
import {MangaCardData} from "@/types/dashboard/manga-card-data";

// Interfaces
interface ItemCardProps {
    data: MangaCardData;
}

export default function CardSimple({data} : ItemCardProps) {
    return (
        <Link href="#" key={data.id} className="relative block group hover:scale-105 transition-all duration-300">
            <Image
                src={data.image}
                alt={data.title}
                width={150}
                height={200}
                className="rounded-md w-full h-64 object-cover"
                loading="lazy"
            />

            <div className="absolute inset-x-0 bottom-0 z-10 p-4 transition-all duration-300 group-hover:bg-gradient-to-t group-hover:from-gray-700 group-hover:via-gray-700/60 group-hover:to-transparent">
                <h3 className="text-sm text-white">{data.title}</h3>
            </div>
        </Link>
    )
}