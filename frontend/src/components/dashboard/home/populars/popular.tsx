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
            <aside className="order-2 right-0 w-72 h-fit z-40 bg-main-foreground rounded-md hidden lg:block text-white">
                <h2 className="font-medium text-center p-2 border-b border-b-border-light/20">Popular</h2>

                <PopularGrid items={data} />
            </aside>
        </>
    )
}