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
                <div className="flex items-center justify-between mb-4 text-white">
                    <h2 className="text-2xl font-semibold">Random Manga</h2>
                    <Link href="#" className="text-md font-medium">See more...</Link>
                </div>

                <RandomGrid data={data}/>

                <div className="flex justify-center mt-5 mb-8 text-white">
                    <Button variant="ghost" className="hover:bg-main-foreground hover:text-white active:bg-white active:text-black">
                        <RefreshCwIcon className="w-5 h-5" />
                        Refresh
                    </Button>
                </div>
            </div>
        </>
    )
}