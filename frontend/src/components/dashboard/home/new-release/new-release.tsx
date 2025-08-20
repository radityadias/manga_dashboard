import Link from "next/link";

import NewReleaseGrid from "@/components/dashboard/home/new-release/new-release-grid";
import {NewReleaseData} from "@/types/dashboard/new-release-data";

interface NewReleaseProps {
    data: NewReleaseData[];
}

export  default  function NewRelease ({data} : NewReleaseProps) {
    return (
        <>
            <div className="w-full">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-semibold">New Release</h2>
                    <Link href="#" className="text-md font-medium ">See more...</Link>
                </div>

                <NewReleaseGrid data={data}/>

            </div>
        </>
    )
}