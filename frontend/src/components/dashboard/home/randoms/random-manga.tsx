import {RandomData} from "@/types/dashboard/random-data";
import Image from "next/image";

interface RandomMangaProps {
    item: RandomData;
}

export default function RandomManga({item} : RandomMangaProps) {
    return (
        <div className="flex flex-col items-center text-white">
            <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={150}
                className="rounded-md h-48 w-full sm:h-64  object-cover"
                loading="lazy"
            />
            <p className="text-center text-sm">{item.title}</p>
        </div>
    )
}