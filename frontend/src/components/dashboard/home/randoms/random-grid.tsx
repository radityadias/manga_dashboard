import {RandomData} from "@/types/dashboard/random-data";
import RandomManga from "@/components/dashboard/home/randoms/random-manga";

interface RandomGridProps {
    data: RandomData[];
}

export default function RandomGrid({data} : RandomGridProps) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {data.map((item) => (
                <RandomManga item={item} key={item.id}/>
            ))}
        </div>
    )
}