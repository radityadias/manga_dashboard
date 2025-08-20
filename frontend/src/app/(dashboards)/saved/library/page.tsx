import {PageHeader} from "@/components/page-header";

import LibraryHeader from "@/components/dashboard/library/library-header";
import LibraryGrid from "@/components/dashboard/library/library-grid";
import LibraryPagination from "@/components/dashboard/library/library-pagination";

const libraryData = [
    {
        "id": 1,
        "image": "https://placehold.co/150x150/2d3748/cbd5e0?text=Evil+Baby",
        "title": "Evil Baby",
        "language": "English"
    },
    {
        "id": 2,
        "image": "https://placehold.co/150x150/4a5568/a0aec0?text=Shadow+Warrior",
        "title": "Shadow Warrior",
        "language": "English"
    },
    {
        "id": 3,
        "image": "https://placehold.co/150x150/718096/e2e8f0?text=Mystic+Quest",
        "title": "Mystic Quest",
        "language": "English"
    },
    {
        "id": 4,
        "image": "https://placehold.co/150x150/a0aec0/2d3748?text=Tech+Saga",
        "title": "Tech Saga",
        "language": "English"
    },
    {
        "id": 5,
        "image": "https://placehold.co/150x150/cbd5e0/4a5568?text=Cosmic+Drifter",
        "title": "Cosmic Drifter",
        "language": "English"
    },
    {
        "id": 6,
        "image": "https://placehold.co/150x150/e2e8f0/718096?text=Eternal+Chronicle",
        "title": "Eternal Chronicle",
        "language": "English"
    },
    {
        "id": 7,
        "image": "https://placehold.co/150x150/ecc94b/2d3748?text=Urban+Legends",
        "title": "Urban Legends",
        "language": "English"
    },
    {
        "id": 8,
        "image": "https://placehold.co/150x150/ed64a6/4a5568?text=Dragon+Heart",
        "title": "Dragon Heart",
        "language": "English"
    },
    {
        "id": 9,
        "image": "https://placehold.co/150x150/d53f8c/718096?text=Witchcraft+Academy",
        "title": "Witchcraft Academy",
        "language": "English"
    },
    {
        "id": 10,
        "image": "https://placehold.co/150x150/b32e5b/a0aec0?text=Galactic+Odyssey",
        "title": "Galactic Odyssey",
        "language": "English"
    },
    {
        "id": 11,
        "image": "https://placehold.co/150x150/8b4513/d2b48c?text=Ancient+Secrets",
        "title": "Ancient Secrets",
        "language": "English"
    },
    {
        "id": 12,
        "image": "https://placehold.co/150x150/a9a9a9/f5f5dc?text=Cyber+Revolt",
        "title": "Cyber Revolt",
        "language": "English"
    },
    {
        "id": 13,
        "image": "https://placehold.co/150x150/4682b4/b0c4de?text=Sea+of+Stars",
        "title": "Sea of Stars",
        "language": "English"
    },
    {
        "id": 14,
        "image": "https://placehold.co/150x150/556b2f/9acd32?text=Forest+of+Whispers",
        "title": "Forest of Whispers",
        "language": "English"
    },
    {
        "id": 15,
        "image": "https://placehold.co/150x150/6a5acd/e6e6fa?text=Time+Traveler",
        "title": "Time Traveler",
        "language": "English"
    },
    {
        "id": 16,
        "image": "https://placehold.co/150x150/d2691e/ffe4c4?text=Desert+Mirage",
        "title": "Desert Mirage",
        "language": "English"
    },
    {
        "id": 17,
        "image": "https://placehold.co/150x150/800080/ffc0cb?text=Magical+Girls",
        "title": "Magical Girls",
        "language": "English"
    },
    {
        "id": 18,
        "image": "https://placehold.co/150x150/8fbc8f/add8e6?text=Sky+High",
        "title": "Sky High",
        "language": "English"
    },
    {
        "id": 19,
        "image": "https://placehold.co/150x150/483d8b/b0e0e6?text=Secret+Society",
        "title": "Secret Society",
        "language": "English"
    },
    {
        "id": 20,
        "image": "https://placehold.co/150x150/008080/afeeee?text=Underwater+World",
        "title": "Underwater World",
        "language": "English"
    },
    {
        "id": 21,
        "image": "https://placehold.co/150x150/4b0082/9932cc?text=Space+Pirates",
        "title": "Space Pirates",
        "language": "English"
    },
    {
        "id": 22,
        "image": "https://placehold.co/150x150/2f4f4f/d3d3d3?text=Ghost+Stories",
        "title": "Ghost Stories",
        "language": "English"
    },
    {
        "id": 23,
        "image": "https://placehold.co/150x150/8b0000/cd5c5c?text=Zombie+Apocalypse",
        "title": "Zombie Apocalypse",
        "language": "English"
    },
    {
        "id": 24,
        "image": "https://placehold.co/150x150/006400/3cb371?text=Dragon+Slayer",
        "title": "Dragon Slayer",
        "language": "English"
    }
]

export default function LibraryPage () {
    return (
        <>
            <PageHeader children="Library"/>

            <LibraryHeader/>
            <LibraryGrid data={libraryData}/>
            <LibraryPagination/>
        </>
    )
}