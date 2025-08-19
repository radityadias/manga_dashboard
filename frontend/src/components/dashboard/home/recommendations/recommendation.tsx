"use client";

// State
import { useState } from 'react';

// Components
import RecommendationManga from "./recommendation-manga";

// Types
import {RecommendationData} from "@/types/dashboard/recommendation-data";

// Interfaces
interface RecommendationProps{
    data: RecommendationData[];
}

export default function RecommendationsCarousel({data} : RecommendationProps) {
    const [currentPage, setCurrentPage] = useState(0);
    const cardsPerPage = 1;

    const totalPages = Math.ceil(data.length / cardsPerPage);

    const handleNext = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const handlePrev = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const startIndex = currentPage * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const currentItems = data.slice(startIndex, endIndex);

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Recommendations</h2>

            {/* Grid Template */}
            <div className="relative">
                <div className={`grid gap-6 transition-all duration-500`}
                     style={{
                         gridTemplateColumns: `repeat(${cardsPerPage}, minmax(0, 1fr))`,
                     }}>
                    {currentItems.map((item) => (
                        <RecommendationManga item={item} key={item.id}/>
                    ))}
                </div>
            </div>

            {/* Image Control */}
            <div className="mt-6 flex justify-center items-center gap-4 mb-8">
                <button
                    onClick={handlePrev}
                    className="p-1 bg-gray-900 text-white rounded-full shadow-lg opacity-75 hover:opacity-100 transition-opacity duration-200"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
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
