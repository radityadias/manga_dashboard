"use client"

import { useState, useEffect, useRef } from "react"
import { Search, X, StarIcon, DotIcon } from "lucide-react"
import Image from "next/image"

const searchData = [
    { id: 1, title: "One Piece", status: "On Going", rating: 9.25, image: "https://placehold.co/150x150/2d3748/cbd5e0?text=One+Piece" },
    { id: 2, title: "Attack on Titan", status: "Completed", rating: 9.10, image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Attack+on+Titan" },
    { id: 3, title: "Death Note", status: "Completed", rating: 9.00, image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Death+Note" },
    { id: 4, title: "Naruto", status: "Completed", rating: 8.75, image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Naruto" },
    { id: 5, title: "My Hero Academia", status: "On Going", rating: 8.50, image: "https://placehold.co/150x150/2d3748/cbd5e0?text=My+Hero+Academia" },
    { id: 6, title: "Jujutsu Kaisen", status: "On Going", rating: 8.85, image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Jujutsu+Kaisen" },
    { id: 7, title: "Demon Slayer", status: "On Going", rating: 8.90, image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Demon+Slayer" },
    { id: 8, title: "Chainsaw Man", status: "On Hold", rating: 8.65, image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Chainsaw+Man" },
    { id: 9, title: "Spy x Family", status: "On Going", rating: 8.80, image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Spy+x+Family" },
    { id: 10, title: "Berserk", status: "On Hold", rating: 9.35, image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Berserk" },
];

interface SearchResult {
    id: number
    title: string
    status: string
    rating: number
    image: string
}

export default function AppSearch() {
    const [query, setQuery] = useState("")
    const [results, setResults] = useState<SearchResult[]>([])
    const wrapperRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (query.trim() !== "") {
            const filteredResults = searchData.filter(result => {
                return result.title.toLowerCase().includes(query.toLowerCase())
            })
            setResults(filteredResults)
        } else {
            setResults([])
        }
    }, [query]);

    // This effect handles clicking outside the search component to clear results
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setResults([])
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [wrapperRef]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value)
    }

    const handleClear = () => {
        setQuery("")
        setResults([])
    }

    return (
        <div className="w-full max-w-lg relative" ref={wrapperRef}>
            <div className="relative w-full">
                <input
                    type="text"
                    placeholder="Search..."
                    className="flex h-10 text-white min-w-full rounded-md placeholder:text-white/60 bg-main-foreground px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 max-w-96 transition-all duration-300 pr-10"
                    value={query}
                    onChange={handleInputChange}
                />
                {query ? (
                    <X onClick={handleClear} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 cursor-pointer"/>
                ) : (
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white h-4 w-4 pointer-events-none" />
                )}
            </div>
            {results.length > 0 && (
                <div className="absolute z-10 w-full bg-main-dark rounded-md shadow-lg mt-2 p-2 space-y-2 overflow-y-scroll max-h-96">
                    {results.map((result) => (
                        <div key={result.id} className="flex gap-5 p-1 hover:bg-main-accent cursor-pointer bg-main-foreground rounded-md">
                            <Image
                                src={result.image}
                                alt={result.title}
                                width={80}
                                height={96}
                                className="rounded-sm w-16 h-20 object-cover"
                            />
                            <div className="flex flex-col justify-between w-full py-1">
                                <p className="text-white">{result.title}</p>
                                <div className="flex gap-2 items-center">
                                    <div className="flex gap-1 items-center just text-yellow-500 text-sm">
                                        <StarIcon className="h-4 w-4" />
                                        {result.rating}
                                    </div>
                                    <div className="flex items-center gap-1 bg-main-foreground rounded-md px-2 text-xs text-white">
                                        {result.status}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}