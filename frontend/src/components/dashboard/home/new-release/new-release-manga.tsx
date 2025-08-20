import {NewReleaseData} from "@/types/dashboard/new-release-data";
import Image from "next/image";

interface NewReleaseMangaProps {
    item: NewReleaseData;
}

export default function NewReleaseManga({item} : NewReleaseMangaProps) {
    return (
        <div className="flex flex-col items-center" key={item.id}>
        <Image
            src={item.image}
            alt={item.image}
            width={125}
            height={150}
            className="object-cover w-full h-52 rounded-md"
            loading="lazy"
        />
        <p className="text-sm text-center">{item.title}</p>
    </div>)
}