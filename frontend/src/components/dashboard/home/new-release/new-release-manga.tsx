import {NewReleaseData} from "@/types/dashboard/new-release-data";
import Image from "next/image";
import Link from "next/link";

interface NewReleaseMangaProps {
    item: NewReleaseData;
}

export default function NewReleaseManga({item} : NewReleaseMangaProps) {
    return (
        <Link href="#" className="flex flex-col items-center text-white hover:scale-105 transform duration-300 group" key={item.id}>
            <Image
                src={item.image}
                alt={item.image}
                width={125}
                height={150}
                className="object-cover w-full h-52 rounded-md"
                loading="lazy"
            />
            <p className="text-sm text-center group-hover:text-yellow-primary">{item.title}</p>
        </Link>
    )
}