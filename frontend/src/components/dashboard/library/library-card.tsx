import Image from "next/image";
import Link from "next/link";
import {LibraryData} from "@/types/dashboard/library-data";

interface LibraryCardProps {
    item: LibraryData;
}

export default function LibraryCard({item} : LibraryCardProps) {
    return (
        <Link href="#" key={item.id} className="relative block group hover:scale-105 transition-all duration-300">
            <Image src={item.image} alt={item.title} width={150} height={200} className="rounded-md w-full h-64 object-cover"/>
            <div className="absolute inset-x-0 bottom-0 z-10 p-4 transition-all duration-300 group-hover:bg-gradient-to-t group-hover:from-gray-700 group-hover:via-gray-700/60 group-hover:to-transparent">
                <h3 className="text-sm text-white">{item.title}</h3>
            </div>
        </Link>
    )
}