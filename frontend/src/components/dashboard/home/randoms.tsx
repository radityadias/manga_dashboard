import {RefreshCwIcon} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface RandomData {
    id: number;
    image: string;
    title: string;
}

export default function Randoms() {
    const randomData = [
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
    ]

    return (
        <>
            <div>
                <div className="grid grid-cols-2 mb-6">
                    <h2 className="text-2xl font-semibold">Random Manga</h2>
                    <Link href="#" className="text-md font-medium text-end">See more...</Link>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                    {randomData.map((item: RandomData) => (
                        <div className="flex flex-col " key={item.id}>
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={100}
                                height={150}
                                className="rounded-md h-48 w-full sm:h-64  object-cover"
                            />
                            <div className="flex flex-col">
                                <p>{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-5">
                    <Button variant="ghost">
                        <RefreshCwIcon className="w-5 h-5" />
                        Refresh
                    </Button>
                </div>
            </div>
        </>
    )
}