import dynamic from "next/dynamic";

// Lazy Loading Component
const SearchForm = dynamic(() => import("@/components/dashboard/advances-search/search-form"))

// Components
import PageGrid from "@/components/page-grid";

// Types
import {MangaCardData} from "@/types/dashboard/manga-card-data";

// Interfaces
interface AdvanceSearchProps {
    data: MangaCardData[];
}

export default function AdvanceSearch({data} : AdvanceSearchProps) {
    return (
        <>
            <SearchForm />
            <PageGrid className="grid-cols-1 sm:grid-cols-2" card="half" data={data} />
        </>
    )
}