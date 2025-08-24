import {RandomData} from "@/types/dashboard/random-data";
import Image from "next/image";
import Link from "next/link";

interface RandomMangaProps {
    item: RandomData;
}

export default function RandomManga({item} : RandomMangaProps) {
    return (
        <Link href="#" className="flex flex-col items-center hover:scale-105 transition-all duration-300 group">
            <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={150}
                className="rounded-md h-48 w-full sm:h-64  object-cover"
                loading="lazy"
            />
            <p className="text-center text-sm text-white group-hover:text-yellow-primary">{item.title}</p>
        </Link>
    )
}