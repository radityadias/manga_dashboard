"use client";

import { useState } from 'react';
import Image from 'next/image';

// Mocked data as an array of objects
const bannerData = [
    {
        image: "https://placehold.co/150x150/f0f4f8/94a3b8?text=Image+1",
        title: "The Silent Forest",
        genre: "Fantasy",
        description: "An epic tale of a lone warrior's journey through an enchanted, desolate forest to confront an ancient evil.",
        author: "A. L. Thompson",
    },
    {
        image: "https://placehold.co/150x150/f0f4f8/94a3b8?text=Image+2",
        title: "City of Shadows",
        genre: "Mystery",
        description: "A detective must solve a series of mysterious disappearances in a futuristic city where nothing is as it seems.",
        author: "J. K. Rowling",
    },
    {
        image: "https://placehold.co/150x150/f0f4f8/94a3b8?text=Image+3",
        title: "Stars Beyond",
        genre: "Sci-Fi",
        description: "A crew of explorers discovers a new habitable planet, but they soon find that they are not alone.",
        author: "Isaac Asimov",
    },
    {
        image: "https://placehold.co/150x150/f0f4f8/94a3b8?text=Image+4",
        title: "The Last Scroll",
        genre: "Adventure",
        description: "A thrilling adventure across continents to find a legendary artifact that can change the fate of the world.",
        author: "H. G. Wells",
    },
    {
        image: "https://placehold.co/150x150/f0f4f8/94a3b8?text=Image+5",
        title: "The Azure Key",
        genre: "Fantasy",
        description: "A young apprentice discovers a magical key that unlocks ancient secrets and forgotten worlds.",
        author: "S. K. White",
    },
    {
        image: "https://placehold.co/150x150/f0f4f8/94a3b8?text=Image+6",
        title: "Echoes of the Past",
        genre: "Historical Fiction",
        description: "A historian uncovers a hidden diary revealing a forgotten romance during a time of war and upheaval.",
        author: "M. A. Parker",
    },
];

export default function RecommendationsCarousel() {
    // State to manage the current page of the carousel
    const [currentPage, setCurrentPage] = useState(0);
    // The number of cards to display is a fixed constant: 1
    const cardsPerPage = 1;

    // Calculate the total number of pages
    const totalPages = Math.ceil(bannerData.length / cardsPerPage);

    // Function to handle moving to the next page
    const handleNext = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    // Function to handle moving to the previous page
    const handlePrev = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    // Determine the slice of data to display on the current page
    const startIndex = currentPage * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const currentItems = bannerData.slice(startIndex, endIndex);

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Recommendations</h2>

            {/* Carousel Container */}
            <div className="relative">
                {/* The main grid container for the visible recommendation cards. */}
                <div className={`grid gap-6 transition-all duration-500`}
                     style={{
                         gridTemplateColumns: `repeat(${cardsPerPage}, minmax(0, 1fr))`,
                     }}>
                    {currentItems.map((item, index) => (
                        // Each item is a new card-like div.
                        <div
                            key={index}
                            className="rounded-lg shadow-lg overflow-hidden bg-white p-4 transition-transform duration-300 hover:scale-[1.02] flex flex-col"
                        >
                            {/* A nested grid to handle the top layout for each recommendation item. */}
                            <div className="grid grid-cols-6 gap-4">
                                {/* Image container */}
                                <div className="col-span-3 sm:col-span-2 md:col-span-2 lg:col-span-1 flex justify-center">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={75}
                                        height={75}
                                        className="rounded-md w-56 h-64 object-cover"
                                    />
                                </div>

                                {/* Content container */}
                                <div className="col-span-3 sm:col-span-4 flex flex-col justify-between">
                                    <div>
                                        {/* Title */}
                                        <h3 className="text-lg font-medium text-gray-900 mb-1 leading-tight">
                                            {item.title}
                                        </h3>
                                        {/* Genre */}
                                        <p className="text-sm text-gray-500 mb-2">{item.genre}</p>
                                        {/* Description */}
                                        <p className="text-sm text-gray-600 line-clamp-3">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Author information is now separated from image control */}
                                    <div className="mt-4 flex justify-between items-center">
                                        <p className="text-sm text-gray-700">
                                            by <span className="font-medium">{item.author}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-6 flex justify-center items-center gap-4 mb-8">
                <button
                    onClick={handlePrev}
                    className="p-1 bg-gray-900 text-white rounded-full shadow-lg opacity-75 hover:opacity-100 transition-opacity duration-200"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                {/* The "Image Control" text is now a separate element */}
                <p className="text-sm text-gray-500">{`No. ${currentPage + 1}`}</p>
                <button
                    onClick={handleNext}
                    className="p-1 bg-gray-900 text-white rounded-full shadow-lg opacity-75 hover:opacity-100 transition-opacity duration-200"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
