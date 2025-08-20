import {NewReleaseData} from "@/types/dashboard/new-release-data";
import NewReleaseManga from "@/components/dashboard/home/new-release/new-release-manga";

interface NewReleaseGridProps {
    data: NewReleaseData[];
}

export default function NewReleaseGrid({data} : NewReleaseGridProps) {
    return (
        <div className="order-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {data.map((item) => (
                <NewReleaseManga item={item} key={item.id} />
            ))}
        </div>
    )
}