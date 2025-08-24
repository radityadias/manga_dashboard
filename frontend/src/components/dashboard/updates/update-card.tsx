import Image from "next/image";
import Link from "next/link";
import { UpdateData } from "@/types/dashboard/update-data";

interface UpdateCardProps {
    data: UpdateData;
}

export default function UpdateCard({data} : UpdateCardProps) {
    return (
        <div className="flex flex-row gap-2 bg-main-foreground p-2 rounded-sm">
            <Image
                src={data.image}
                alt={data.title}
                width={150}
                height={200}
                className="rounded-md w-20 h-28 sm:w-40 sm:h-48 object-cover"
            />

            <div className="flex flex-col gap-2 w-full">
                <div className="line-clamp-1">
                    <Link href="#" className="text-start text-lg text-white font-medium">{data.title}</Link>
                </div>
                <div>
                    <hr className="border-yellow-primary/50"/>
                </div>
                <div className="grid grid-rows-3 gap-1 h-full">
                    {data.newChapter.map((item, index) => (
                        <Link key={index} href="#" className="flex flex-col justify-evenly bg-transparent rounded-sm px-1.5 py-0.5 hover:bg-main-accent/50 hover:scale-101 transform duration-300">
                            <div className="flex justify-between">
                                <p className="text-sm text-white">{item.chapter}</p>
                                <p className="text-sm text-white w-40 text-start">{item.releaseTime}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-xs text-white">{item.language}</p>
                                <p className="text-xs text-white w-40 text-start">{item.scanlation}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}