import ItemCard from "@/components/dashboard/advances-search/item-card";
import {AdvanceSearchData} from "@/types/dashboard/advance-search-data";

interface ItemGridProps {
    data: AdvanceSearchData[];
}

export default function ItemGrid({data} : ItemGridProps){
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {data.map((item) => (
                <ItemCard data={item} key={item.id} />
            ))}
        </div>
    )
}