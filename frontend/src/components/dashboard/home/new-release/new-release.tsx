import Link from "next/link";

import NewReleaseGrid from "@/components/dashboard/home/new-release/new-release-grid";
import {NewReleaseData} from "@/types/dashboard/new-release-data";
import {SectionHeader} from "@/components/dashboard/home/section-header";

interface NewReleaseProps {
    data: NewReleaseData[];
}

export  default  function NewRelease ({data} : NewReleaseProps) {
    return (
        <>
            <div className="w-full">
                <SectionHeader title="New Release" path="/new-release"/>

                <NewReleaseGrid data={data}/>
            </div>
        </>
    )
}