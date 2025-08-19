import {UpdateData} from "@/types/dashboard/update-data";
import UpdateCard from "@/components/dashboard/updates/update-card";

interface UpdateGridProps {
    data: UpdateData[];
}

export default function UpdateGrid({data} : UpdateGridProps) {
    return (
        <div className="grid grid-rows-10 gap-3 mb-4">
            {data.map((item) => (
                <UpdateCard data={item} key={item.id} />
            ))}
        </div>
    )
}