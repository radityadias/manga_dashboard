import {LibraryData} from "@/types/dashboard/library-data";
import LibraryCard from "@/components/dashboard/library/library-card";

interface LibraryGridProps {
    data: LibraryData[];
}

export default function LibraryGrid({data} : LibraryGridProps) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2 mb-8">
            {data.map((item: LibraryData) => (
                <LibraryCard item={item} key={item.id}/>
            ))}
        </div>
    )
}