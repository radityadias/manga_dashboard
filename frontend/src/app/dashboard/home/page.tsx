import RecommendationsCarousel from "@/components/dashboard/home/recommendation";
import Updates from "@/components/dashboard/home/updates";
import Randoms from "@/components/dashboard/home/randoms";
import NewRelease from "@/components/dashboard/home/NewRelease";
import Populars from "@/components/dashboard/home/populars";
import Genres from "@/components/dashboard/home/genres";
import ByAlphabets from "@/components/dashboard/home/by-alphabets";

export default function HomePage() {
    return (
        <div>
            <RecommendationsCarousel/>
            <Updates/>
            <Randoms/>
            <div className="flex justify-between gap-5 mb-8">
                <div className="flex flex-1 flex-col gap-6">
                    <NewRelease/>
                    <Genres/>
                </div>
                <Populars/>
            </div>
            <ByAlphabets/>
        </div>
    )
}