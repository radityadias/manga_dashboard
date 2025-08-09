import RecommendationsCarousel from "@/components/dashboard/home/recommendation";
import Updates from "@/components/dashboard/home/updates";
import Randoms from "@/components/dashboard/home/randoms";
import NewRelease from "@/components/dashboard/home/NewRelease";
import ByAlphabets from "@/components/dashboard/home/by-alphabets";

export default function HomePage() {
    return (
        <div>
            <RecommendationsCarousel/>
            <Updates/>
            <Randoms/>
            <NewRelease/>
            <ByAlphabets/>
        </div>
    )
}