import RecommendationsCarousel from "@/components/dashboard/home/recommendation";
import Updates from "@/components/dashboard/home/updates";
import Randoms from "@/components/dashboard/home/randoms";

export default function HomePage() {
    return (
        <div>
            <RecommendationsCarousel/>
            <Updates/>
            <Randoms/>
        </div>
    )
}