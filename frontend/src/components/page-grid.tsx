import { cn } from '@/lib/utils'

// Components
import CardFull from "@/components/templates/cards/card-full";
import CardHalf from "@/components/templates/cards/card-half";
import CardSimple from "@/components/templates/cards/card-simple";

// Types
import {MangaCardData} from "@/types/dashboard/manga-card-data";

// Interfaces
interface PageGridProps {
    className?: string;
    card: 'full' | 'half' | 'simple';
    data: MangaCardData[];
}

export default function PageGrid({className, data, card} : PageGridProps ) {
    return (
        <>
            <div
                className={cn("grid grid-rows-0 grid-cols-0 gap-3 mb-4", className)}
            >
                {data.map((item) => (
                    card === 'full' ? (
                        <CardFull data={item} key={item.id}/>
                    ) : card === 'half' ? (
                        <CardHalf data={item} key={item.id}/>
                    ) : (
                        <CardSimple data={item} key={item.id}/>
                    )
                ))}
            </div>
        </>
    )
}