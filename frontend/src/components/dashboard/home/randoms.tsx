"use client"

import { HTMLAttributes, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

// Interface for manga item data
interface UpdateItem {
    id: number;
    image: string;
    title: string;
}

export default function Randoms() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);

    const updatesData: UpdateItem[] = [
        {
            id: 1,
            image: "https://placehold.co/200x250/2d3748/cbd5e0?text=Evil+Baby",
            title: "Evil Baby",
        },
        {
            id: 2,
            image: "https://placehold.co/200x250/2d3748/cbd5e0?text=Isekai+Doctor",
            title: "THE ISEKAI DOCTOR Any s...",
        },
        {
            id: 3,
            image: "https://placehold.co/200x250/2d3748/cbd5e0?text=Nukozuke",
            title: "Nukozuke!",
        },
        {
            id: 4,
            image: "https://placehold.co/200x250/2d3748/cbd5e0?text=Anata+Mitai",
            title: "Anata Mitai ni",
        },
        {
            id: 5,
            image: "https://placehold.co/200x250/2d3748/cbd5e0?text=Apologize",
            title: "Is It Too Late to Apologize N...",
        },
        {
            id: 6,
            image: "https://placehold.co/200x250/2d3748/cbd5e0?text=Bleach",
            title: "Bleach (Official Colored)",
        },
        {
            id: 7,
            image: "https://placehold.co/200x250/2d3748/cbd5e0?text=Isekai+Ojisan",
            title: "Isekai Ojisan",
        },
        {
            id: 8,
            image: "https://placehold.co/200x250/2d3748/cbd5e0?text=Harmony",
            title: "Harmony",
        },
        {
            id: 9,
            image: "https://placehold.co/200x250/2d3748/cbd5e0?text=Ryuu+Ron",
            title: "Ryuu: Ron",
        },
        {
            id: 10,
            image: "https://placehold.co/200x250/2d3748/cbd5e0?text=Male+Lead",
            title: "The Male Lead Is Obsessed...",
        }
    ];

    // Function to handle the horizontal scroll
    const scroll = (direction: 'left' | 'right') => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const scrollAmount = container.clientWidth; // Scroll by the width of the container
        const targetScroll = direction === 'left'
            ? container.scrollLeft - scrollAmount
            : container.scrollLeft + scrollAmount;

        container.scrollTo({
            left: targetScroll,
            behavior: 'smooth'
        });
    };

    // Function to check if scroll buttons should be visible
    const handleScroll = () => {
        const container = scrollContainerRef.current;
        if (!container) return;

        setShowLeftButton(container.scrollLeft > 0);
        // Adjusted the condition to check if the scrollbar has reached the end
        const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 1;
        setShowRightButton(!isAtEnd);
    };

    // A Card component for each manga item
    const MangaCard = ({ item }: { item: UpdateItem }) => (
        <Card className="w-[200px] flex-shrink-0 hover:scale-105 transition-transform duration-200 cursor-pointer bg-transparent border-none shadow-none">
            <CardContent className="p-0">
                <div className="flex flex-col gap-2">
                    <Image
                        src={item.image}
                        alt={item.title}
                        width={200}
                        height={250}
                        className="rounded-md hover:opacity-80 transition-opacity"
                    />
                    <p className="text-sm truncate text-center">{item.title}</p>
                </div>
            </CardContent>
        </Card>
    );

    return (
        <div className="p-6 relative overflow-hidden">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Random Manga</h2>
                <Link href="#" className="text-md font-medium hover:underline">
                    See more...
                </Link>
            </div>

            <div className="relative">
                <div
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    className="flex gap-5 pb-4 overflow-x-hidden scroll-smooth"
                >
                    {updatesData.map((item) => (
                        <MangaCard key={item.id} item={item} />
                    ))}
                </div>

                {showLeftButton && (
                    <Button
                        size="icon"
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-gray-900/75 hover:bg-gray-900 text-white rounded-full shadow-lg z-10"
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                )}

                {showRightButton && (
                    <Button
                        size="icon"
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-gray-900/75 hover:bg-gray-900 text-white rounded-full shadow-lg z-10"
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                )}
            </div>
        </div>
    );
}