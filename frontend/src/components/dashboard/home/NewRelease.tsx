import Genres from "./genres";
import Populars from "./populars";
import Image from "next/image"
import Link from "next/link";

interface NewReleaseData {
    id: number;
    image: string;
    title: string;
}

export  default  function NewRelease () {
    const newReleaseData = [
        {
            id: 1,
            image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Evil+Baby",
            title: "Evil Baby",
        },
        {
            id: 2,
            image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Isekai+Doctor",
            title: "THE ISEKAI DOCTOR",
        },
        {
            id: 3,
            image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Nukozuke",
            title: "Nukozuke!",
        },
        {
            id: 4,
            image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Anata+Mitai",
            title: "Anata Mitai ni",
        },
        {
            id: 5,
            image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Apologize",
            title: "Is It Too Late to Apologize ",
        },
        {
            id: 6,
            image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Isekai+Ojisan",
            title: "Isekai Ojisan",
        },
        {
            id: 7,
            image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Nukozuke",
            title: "Nukozuke!",
        },
        {
            id: 8,
            image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Anata+Mitai",
            title: "Anata Mitai ni",
        },
        {
            id: 9,
            image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Apologize",
            title: "Is It Too Late to Apologize ",
        },
        {
            id: 10,
            image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Isekai+Ojisan",
            title: "Isekai Ojisan",
        },

    ]

    return (
        <>
            <div className="w-full">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-semibold">New Release</h2>
                    <Link href="#" className="text-md font-medium ">See more...</Link>
                </div>
                <div className="order-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                    {newReleaseData.map((release: NewReleaseData) => (
                        <div className="flex flex-col items-center" key={release.id}>
                            <Image
                                src={release.image}
                                alt={release.image}
                                width={125}
                                height={150}
                                className="object-cover w-full h-52 rounded-md"
                            />
                            <p className="text-sm text-center">{release.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}