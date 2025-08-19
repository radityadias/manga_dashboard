import dynamic from "next/dynamic";

import RecommendationsCarousel from "@/components/dashboard/home/recommendations/recommendation";
import Updates from "@/components/dashboard/home/updates";

const Randoms = dynamic(() => import("@/components/dashboard/home/randoms"))
const NewRelease = dynamic(() => import("@/components/dashboard/home/new-release"))
const Populars = dynamic(() => import("@/components/dashboard/home/populars"))
const Genres = dynamic(() => import("@/components/dashboard/home/genres"))
const ByAlphabets = dynamic(() => import("@/components/dashboard/home/by-alphabets"))

const recommendationsData = [
    {
        id: 1,
        image: "https://placehold.co/150x150/f0f4f8/94a3b8?text=Image+1",
        title: "The Silent Forest",
        genre: "Fantasy",
        description: "An epic tale of a lone warrior's journey through an enchanted, desolate forest to confront an ancient evil.",
        author: "A. L. Thompson",
    },
    {
        id: 2,
        image: "https://placehold.co/150x150/f0f4f8/94a3b8?text=Image+2",
        title: "City of Shadows",
        genre: "Mystery",
        description: "A detective must solve a series of mysterious disappearances in a futuristic city where nothing is as it seems.",
        author: "J. K. Rowling",
    },
    {
        id: 3,
        image: "https://placehold.co/150x150/f0f4f8/94a3b8?text=Image+3",
        title: "Stars Beyond",
        genre: "Sci-Fi",
        description: "A crew of explorers discovers a new habitable planet, but they soon find that they are not alone.",
        author: "Isaac Asimov",
    },
    {
        id: 4,
        image: "https://placehold.co/150x150/f0f4f8/94a3b8?text=Image+4",
        title: "The Last Scroll",
        genre: "Adventure",
        description: "A thrilling adventure across continents to find a legendary artifact that can change the fate of the world.",
        author: "H. G. Wells",
    },
    {
        id: 5,
        image: "https://placehold.co/150x150/f0f4f8/94a3b8?text=Image+5",
        title: "The Azure Key",
        genre: "Fantasy",
        description: "A young apprentice discovers a magical key that unlocks ancient secrets and forgotten worlds.",
        author: "S. K. White",
    },
    {
        id: 6,
        image: "https://placehold.co/150x150/f0f4f8/94a3b8?text=Image+6",
        title: "Echoes of the Past",
        genre: "Historical Fiction",
        description: "A historian uncovers a hidden diary revealing a forgotten romance during a time of war and upheaval.",
        author: "M. A. Parker",
    },
];

export default function HomePage() {
    return (
        <div>
            <RecommendationsCarousel data={recommendationsData}/>
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