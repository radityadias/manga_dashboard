import {RefreshCwIcon} from "lucide-react";
import { Button } from "@/components/ui/button";
import {RandomData} from "@/types/dashboard/random-data";
import Link from "next/link";
import RandomGrid from "@/components/dashboard/home/randoms/random-grid";

interface RandomProps {
    data: RandomData[];
}

export default function Random({data} : RandomProps) {
    return (
        <>
            <div>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-semibold">Random Manga</h2>
                    <Link href="#" className="text-md font-medium">See more...</Link>
                </div>

                <RandomGrid data={data}/>

                <div className="flex justify-center mt-5 mb-8">
                    <Button variant="ghost">
                        <RefreshCwIcon className="w-5 h-5" />
                        Refresh
                    </Button>
                </div>
            </div>
        </>
    )
}