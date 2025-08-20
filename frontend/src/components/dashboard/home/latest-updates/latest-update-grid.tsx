import {LatestUpdateData} from "@/types/dashboard/latest-update-data";
import LatestUpdateManga from "@/components/dashboard/home/latest-updates/latest-update-manga";

interface LatestUpdateGridProps {
    data: LatestUpdateData[];
}

export default function LatestUpdateGrid({data} : LatestUpdateGridProps) {
    return (
        <div className="grid grid-rows-5 gap-3 bg-main-foreground p-2 rounded-lg">
            {data.map((item) => (
                <LatestUpdateManga item={item} key={item.id} />
            ))}
        </div>
    )
}