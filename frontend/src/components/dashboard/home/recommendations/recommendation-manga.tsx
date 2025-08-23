import Image from "next/image";
import Link from "next/link";

import {RecommendationData} from "@/types/dashboard/recommendation-data";

interface MangaCardProps {
    item: RecommendationData;
    index: number;
}

export default function RecommendationManga({item, index} : MangaCardProps) {
    const eager_load_count = 2;

    const loadingBehavior = index < eager_load_count ? "eager" : "lazy";

    return (
        <Link href="#" className="flex flex-row gap-2 w-full rounded-lg overflow-hidden bg-main-foreground p-2 sm:p-3 transition-transform duration-300 hover:scale-[1.02] ">
            <Image
                src={item.image}
                alt={item.title}
                width={150} height={200}
                loading={loadingBehavior}
                className="rounded-sm w-28 h-40 sm:w-52 sm:h-64 object-cover"/>
            <div className="flex flex-col justify-between gap-2 w-full text-white">
                <div className="space-y-2">
                    <div className="overflow-y-hidden h-20 sm:h-auto">
                        <p className="text-lg sm:text-xl text-main-yellow">{item.title}</p>
                    </div>
                    <div className="hidden sm:block">
                        <div className="flex flex-row flex-wrap gap-1">
                            {item.genre.map((genre, index) => (
                                <span key={index} className="py-0.5 px-2 text-[10px] bg-main-accent rounded-full uppercase font-semibold">
                                    {genre}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="overflow-y-auto h-full hidden sm:block">
                        <p className="text-sm">{item.description}</p>
                    </div>
                </div>
                <p className="italic text-sm">{item.author}</p>
            </div>
        </Link>
    )
}