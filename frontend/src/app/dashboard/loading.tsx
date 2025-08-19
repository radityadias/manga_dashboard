import {Skeleton} from "@/components/ui/skeleton";

export default function DashboardLoading() {
    return (
        <>
            <div className="container-wide w-full flex flex-col gap-4">
                {/* Recommendations Carousel */}
                <Skeleton className="w-[200px] h-8"/>
                <Skeleton className="w-full h-[288px] mb-16"/>

                {/* Latest LatestUpdate */}
                <div className="flex justify-between items-center w-full">
                    <Skeleton className="w-[166px] h-8"/>
                    <Skeleton className="w-[77px] h-6"/>
                </div>
                <div className="grid grid-cols-4 gap-4 mb-4">
                    <Skeleton className="w-full h-[705px]"/>
                    <Skeleton className="w-full h-[705px]"/>
                    <Skeleton className="w-full h-[705px]"/>
                    <Skeleton className="w-full h-[705px]"/>
                </div>

                {/* Randoms */}
                <div className="flex justify-between items-center w-full">
                    <Skeleton className="w-[166px] h-8"/>
                    <Skeleton className="w-[77px] h-6"/>
                </div>
                <Skeleton className="w-full h-[296px] mb-13"/>

                {/* New Release | Genres | Populars Skeletons (with sidebar) */}
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
                    <div className="flex flex-1 flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between items-center w-full">
                                <Skeleton className="w-[166px] h-8" />
                                <Skeleton className="w-[77px] h-6" />
                            </div>
                            <Skeleton className="w-full h-[508px]" />
                        </div>
                        <div>
                            <Skeleton className="w-[80px] h-8 mb-4" />
                            <Skeleton className="w-full h-[212px]" />
                        </div>
                    </div>
                    {/* Sidebar column (Populars) */}
                    <Skeleton className="w-full md:w-[250px] h-[705px]" />
                </div>

                {/* By Alphabets */}
                <Skeleton className="w-[166px] h-8"/>
                <Skeleton className="w-full h-[88px]"/>
            </div>
        </>
    )
}
