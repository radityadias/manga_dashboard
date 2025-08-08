"use client"

import { useIsMobile } from "@/hooks/use-mobile";
import { useIsTablet } from "@/hooks/use-Tablet";
import Link from "next/link";
import Image from "next/image";

interface UpdateItem {
    image: string;
    title: string;
    chapter: string;
    translator: string;
    updated_at: string;
}

interface UpdatesColumnProps {
    data: UpdateItem[];
}

export default function Updates() {
    const isMobile = useIsMobile();
    const isTablet = useIsTablet();

    const updatesData = [
        {
            image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Evil+Baby",
            title: "Evil Baby",
            chapter: "Ch. 22 - Bathtub",
            translator: "Lilith Scanlatio...",
            updated_at: "3 minutes ago",
        },
        {
            image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Isekai+Doctor",
            title: "THE ISEKAI DOCTOR Any s...",
            chapter: "Vol. 3 Ch. 12 - phon lo...",
            translator: "Mùa Đông Buốt",
            updated_at: "3 minutes ago",
        },
        {
            image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Nukozuke",
            title: "Nukozuke!",
            chapter: "Vol. 12 Ch. 281",
            translator: "TOOR Scans",
            updated_at: "4 minutes ago",
        },
        {
            image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Anata+Mitai",
            title: "Anata Mitai ni",
            chapter: "Ch. 1",
            translator: "Koronesuke",
            updated_at: "9 minutes ago",
        },
        {
            image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Apologize",
            title: "Is It Too Late to Apologize N...",
            chapter: "Ch. 18 - Clingy",
            translator: "Lilith Scanlati...",
            updated_at: "10 minutes ago",
        },
        {
            image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Bleach",
            title: "Bleach (Official Colored)",
            chapter: "Vol. 54 Ch. 479 - Adio...",
            translator: "Kitsuna Scans...",
            updated_at: "13 minutes ago",
        },
        {
            image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Isekai+Ojisan",
            title: "Isekai Ojisan",
            chapter: "Vol. 14 Ch. 70",
            translator: "Home Hero S...",
            updated_at: "23 minutes ago",
        },
        {
            image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Harmony",
            title: "Harmony",
            chapter: "Vol. 4 Ch. 31 - 31",
            translator: "TrafalgarSca...",
            updated_at: "41 minutes ago",
        },
        {
            image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Ryuu+Ron",
            title: "Ryuu: Ron",
            chapter: "Vol. 7 Ch. 8 - Tel...",
            translator: "Japanese Sp...",
            updated_at: "50 minutes ago",
        },
        {
            image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Male+Lead",
            title: "The Male Lead Is Obsessed...",
            chapter: "Vol. 1 Ch. 6",
            translator: "Princess Alis...",
            updated_at: "50 minutes ago",
        },
        {
            image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Grand+Finale",
            title: "Grand Finale",
            chapter: "Ch. 4",
            translator: "Carecas Scan",
            updated_at: "1 hour ago",
        },
        {
            image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Shoukan+Ken",
            title: "Metcha Shoukan Sareta Ken",
            chapter: "Ch. 20",
            translator: "NiceRD",
            updated_at: "1 hour ago",
        },
        {
            image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Yancha+Gal",
            title: "Yancha Gal no Anjou-san",
            chapter: "Vol. 12 Ch. 145 - Anjou...",
            translator: "Dropz S...",
            updated_at: "1 hour ago",
        },
        {
            image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Kubiwa",
            title: "Hazureta Kubiwa wo Suter...",
            chapter: "Vol. 1 Ch. 3",
            translator: "Morse_Fellow's Upl...",
            updated_at: "1 hour ago",
        },
        {
            image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Black+Channel",
            title: "Black Channel",
            chapter: "Vol. 10 Ch. 45 -",
            translator: "Onechan Scans",
            updated_at: "1 hour ago",
        },
        {
            image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Starting+Today",
            title: "Starting Today, We're Child...",
            chapter: "Vol. 7 Ch. 61 -",
            translator: "No Group",
            updated_at: "1 hour ago",
        },
        {
            image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Magical+Girl",
            title: "Magical Girl Dandelion",
            chapter: "Vol. 2 Ch. 7",
            translator: "SNT Trans",
            updated_at: "2 hours ago",
        },
        {
            image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Say+It",
            title: "Say It With Your Body",
            chapter: "Episode 3,part 2 of 8",
            translator: "Ha_leul",
            updated_at: "2 hours ago",
        },
        {
            image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Pure",
            title: "Pure 0.01mm",
            chapter: "Vol. 1 Ch. 6 - Hen Ho...",
            translator: "SNT Trans",
            updated_at: "2 hours ago",
        },
        {
            image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Akazukin",
            title: "Akazukin ni Taberareta Oo...",
            chapter: "Vol. 7 Ch. 61 - The...",
            translator: "Overthink Scans",
            updated_at: "2 hours ago",
        },
        {
            image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Coronica",
            title: "Coronica no Nou",
            chapter: "Ch. 11",
            translator: "No Group",
            updated_at: "2 hours ago",
        },
        {
            image: "https://placehold.co/150x150/2d3748/cbd5e0?text=MAD",
            title: "MAD",
            chapter: "Ch. 8 - Trứng phạt",
            translator: "Levan Pollka",
            updated_at: "2 hours ago",
        },
        {
            image: "https://placehold.co/150x150/2d3748/cbd5e0?text=World+Teacher",
            title: "World Teacher - Isekai",
            chapter: "Vol. 15 Ch. 81",
            translator: "An-san Translati...",
            updated_at: "2 hours ago",
        },
        {
            image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Miharou",
            title: "Miharou no Senjou",
            chapter: "Vol. 1 Ch. 1 - First Fist",
            translator: "Katatoribito",
            updated_at: "2 hours ago",
        },
    ];

    const updatesColumn1 = updatesData.slice(0, 5);
    const updatesColumn2 = updatesData.slice(5, 10);
    const updatesColumn3 = updatesData.slice(10, 15);
    const updatesColumn4 = updatesData.slice(15, 20);

    const UpdatesColumn = ({ data }: UpdatesColumnProps) => (
        <div className="grid grid-rows-5 gap-3 bg-gray-200 p-2 rounded-lg">
            {data.map((item: UpdateItem, index: number) => (
                <div key={index} className="flex gap-3">
                    <div className="flex-shrink-0">
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={75}
                            height={100}
                            className="rounded-md w-24 h-32 object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-start w-full">
                        <h3 className="text-lg font-medium text-gray-800 line-clamp-1">
                            {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-1">{item.chapter}</p>
                        <div className="flex justify-between items-center text-gray-500 text-xs mt-auto">
                            <p className="line-clamp-1">{item.translator}</p>
                            <p className="whitespace-nowrap">{item.updated_at}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="bg-white text-gray-800 rounded-lg mb-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Latest Updates</h2>
                <Link href="#" className="text-md font-medium ">See more...</Link>
            </div>

            {isMobile ? (
                <div className="grid grid-cols-1 gap-6">
                    <UpdatesColumn data={updatesColumn1} />
                </div>
            ) : isTablet ? (
                <div className="grid grid-cols-2 gap-6">
                    <UpdatesColumn data={updatesColumn1} />
                    <UpdatesColumn data={updatesColumn2} />
                </div>
            ) : (
                <div className="grid grid-cols-4 gap-6">
                    <UpdatesColumn data={updatesColumn1} />
                    <UpdatesColumn data={updatesColumn2} />
                    <UpdatesColumn data={updatesColumn3} />
                    <UpdatesColumn data={updatesColumn4} />
                </div>
            )}
        </div>
    );
}

