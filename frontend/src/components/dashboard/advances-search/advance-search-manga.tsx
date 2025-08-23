import Link from "next/link";
import Image from "next/image";
import {StarIcon} from "lucide-react";

import {AdvanceSearchData} from "@/types/dashboard/advance-search-data";

interface ItemCardProps {
    data: AdvanceSearchData;
}

export default function AdvanceSearchManga({data} : ItemCardProps) {
    return(
        <>
            <Link href="#" className="flex flex-row overflow-hidden gap-2 bg-main-foreground text-white p-2 rounded-md h-72 sm:h-full">
                <Image src={data.image} alt={data.title} width={150} height={200} className="rounded-md w-20 h-28 sm:w-36 sm:h-48 object-cover" />
                <div className="flex flex-col gap-1 w-full">
                    <div className="text-lg">{data.title}</div>
                    <div className="flex flex-row flex-wrap gap-1">
                        {data.genre.map((item, index) => (
                            <span key={item} className="p-1 font uppercase ">
                                <p className="text-[10px]">{item}</p>
                            </span>
                        ))}
                    </div>
                    <div className="flex flex-row justify-start items-center gap-2">
                        <div className="flex items-center gap-1 text-main-yellow">
                            <span>
                                <StarIcon className="w-3 h-3"/>
                            </span>
                            <span>
                                <p className="text-sm">{data.rating}</p>
                            </span>
                        </div>
                        <p className="text-sm">{data.status}</p>
                    </div>
                    <div>
                        <p className="text-sm">
                            {data.description}
                        </p>
                    </div>
                </div>
            </Link>
        </>
    )
}