"use client"

import { useIsMobile } from "@/hooks/use-mobile";
import { useIsTablet } from "@/hooks/use-Tablet";
import {LatestUpdateData} from "@/types/dashboard/latest-update-data";
import LatestUpdateGrid from "@/components/dashboard/home/latest-updates/latest-update-grid";
import Link from "next/link";

interface LatestUpdateProps {
    data: LatestUpdateData[];
}

export default function LatestUpdate({data} : LatestUpdateProps) {
    const isMobile = useIsMobile();
    const isTablet = useIsTablet();

    const updatesColumn1 = data.slice(0, 5);
    const updatesColumn2 = data.slice(5, 10);
    const updatesColumn3 = data.slice(10, 15);
    const updatesColumn4 = data.slice(15, 20);

    return (
        <div className="bg-transparent text-white rounded-lg mb-8">
            <div className="flex justify-between items-center mb-4 text-white">
                <h2 className="text-2xl font-semibold">Latest Updates</h2>
                <Link href="#" className="text-md font-medium ">See more...</Link>
            </div>

            {isMobile ? (
                <div className="grid grid-cols-1 gap-6">
                    <LatestUpdateGrid data={updatesColumn1} />
                </div>
            ) : isTablet ? (
                <div className="grid grid-cols-2 gap-6">
                    <LatestUpdateGrid data={updatesColumn1} />
                    <LatestUpdateGrid data={updatesColumn2} />
                </div>
            ) : (
                <div className="grid grid-cols-4 gap-6">
                    <LatestUpdateGrid data={updatesColumn1} />
                    <LatestUpdateGrid data={updatesColumn2} />
                    <LatestUpdateGrid data={updatesColumn3} />
                    <LatestUpdateGrid data={updatesColumn4} />
                </div>
            )}
        </div>
    );
}

