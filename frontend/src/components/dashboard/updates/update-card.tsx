import Image from "next/image";
import Link from "next/link";
import {UpdateData} from "@/types/dashboard/update-data";

interface UpdateCardProps {
    data: UpdateData;
}

export default function UpdateCard({data} : UpdateCardProps) {
    return (
        <>
            <div className="flex flex-row gap-2 bg-main-foreground text-white p-2 rounded-md" key={data.id}>
                <Image
                    src={data.image}
                    alt={data.title}
                    width={150}
                    height={200}
                    className="rounded-md w-24 h-32 sm:w-40 sm:h-full object-cover"
                />
                <div className="flex flex-col w-full">
                    <div className="flex justify-between relative items-center">
                        <p className="text-lg font-semibold">{data.title}</p>
                        <p className="text-sm font-medium">{data.author}</p>
                    </div>
                    <hr className="relative border-white mb-2" />
                    <div className="grid grid-cols-1 relative gap-2">
                        <div className="flex flex-col gap-1 justify-center">
                            {data.newChapter.map((item, index) => (
                                <Link href="#" key={index} className="relative hover:bg-gray-300 px-2 rounded-md">
                                    <div className="flex gap-1 justify-between">
                                        <p>{item.chapter}</p>
                                        <p>{item.releaseTime}</p>
                                    </div>
                                    <div className="flex item gap-1 justify-between mb-2">
                                        <p className="text-sm">{data.scanlation}</p>
                                        <p className="text-sm">{item.language}</p>
                                    </div>
                                    <hr className="relative border-gray-500"/>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}