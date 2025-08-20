// Types
import {PopularData} from "@/types/dashboard/popular-data";

// Components
import PopularGrid from "@/components/dashboard/home/populars/popular-grid";

// Interfaces
interface PopularProps {
    data: PopularData[];
}

export default function Popular({data} : PopularProps) {
    return (
        <>
            <aside className="order-2 right-0 w-72 h-fit z-40 bg-gray-200 rounded-md hidden lg:block">
                <h2 className="font-medium text-center p-2">Popular</h2>

                <PopularGrid items={data} />
            </aside>
        </>
    )
}