import AdvanceSearchManga from "@/components/dashboard/advances-search/advance-search-manga";
import {AdvanceSearchData} from "@/types/dashboard/advance-search-data";

interface ItemGridProps {
    data: AdvanceSearchData[];
}

export default function AdvanceSearchMangaGrid({data} : ItemGridProps){
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {data.map((item) => (
                <AdvanceSearchManga data={item} key={item.id} />
            ))}
        </div>
    )
}