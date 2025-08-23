import Image from "next/image";
import Link from "next/link";
import {LatestUpdateData} from "@/types/dashboard/latest-update-data";

interface LatestUpdateMangaProps {
    item: LatestUpdateData;
}

export default function LatestUpdateManga({item} : LatestUpdateMangaProps) {
    return (
        <Link href="#" className="flex gap-3">
            <div className="flex-shrink-0">
                <Image
                    src={item.image}
                    alt={item.title}
                    width={75}
                    height={100}
                    className="rounded-md w-24 h-32 object-cover"
                    loading="lazy"
                />
            </div>
            <div className="flex flex-col justify-start w-full text-white">
                <h3 className="text-lg font-medium line-clamp-1 hover:text-main-yellow active:text-main-yellow/70">
                    {item.title}
                </h3>
                <p className="text-xs line-clamp-1 text-white/80">{item.chapter}</p>
                <div className="flex justify-between items-center text-xs mt-auto">
                    <p className="whitespace-nowrap">{item.updated_at}</p>
                </div>
            </div>
        </Link>
    )
}