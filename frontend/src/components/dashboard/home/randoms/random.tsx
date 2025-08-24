import {RefreshCwIcon} from "lucide-react";
import { Button } from "@/components/ui/button";
import {RandomData} from "@/types/dashboard/random-data";
import Link from "next/link";
import RandomGrid from "@/components/dashboard/home/randoms/random-grid";
import {SectionHeader} from "@/components/dashboard/home/section-header";

interface RandomProps {
    data: RandomData[];
}

export default function Random({data} : RandomProps) {
    return (
        <>
            <div>
                <SectionHeader children="Random Manga"/>

                <RandomGrid data={data}/>

                <div className="flex justify-center mt-5 mb-8 text-white">
                    <Button variant="ghost" className="hover:bg-main-accent hover:text-main-yellow active:text-main-yellow/50 active:bg-main-foreground">
                        <RefreshCwIcon className="w-5 h-5" />
                        Refresh
                    </Button>
                </div>
            </div>
        </>
    )
}