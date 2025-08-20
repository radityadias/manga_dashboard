import {PageHeader} from "@/components/page-header";
import UpdateGrid from "@/components/dashboard/updates/update-grid";
import UpdatePagination from "@/components/dashboard/updates/update-pagination";

const updatesData = [
    {
        id: 1,
        image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Evil+Baby",
        title: "Evil Baby",
        newChapter: [
            {
                language: "English",
                chapter: "Chapter 1",
                releaseTime: "8 hours ago",
            },
        ],
        author: "Nukozuke",
        scanlation: "Nukozuke",
    },
    {
        id: 2,
        image: "https://placehold.co/150x150/4a5568/a0aec0?text=Shadow+Warrior",
        title: "Shadow Warrior",
        newChapter: [
            {
                language: "English",
                chapter: "Chapter 15",
                releaseTime: "30 minutes ago",
            },
            {
                language: "English",
                chapter: "Chapter 16",
                releaseTime: "30 minutes ago",
            },
            {
                language: "Spanish",
                chapter: "Capítulo 15",
                releaseTime: "30 minutes ago",
            },
        ],
        author: "Kageyama",
        scanlation: "Shadow Scans",
    },
    {
        id: 3,
        image: "https://placehold.co/150x150/718096/e2e8f0?text=Mystic+Quest",
        title: "Mystic Quest",
        newChapter: [
            {
                language: "English",
                chapter: "Chapter 32",
                releaseTime: "1 day ago",
            },
        ],
        author: "Elara",
        scanlation: "Mystic Translators",
    },
    {
        id: 4,
        image: "https://placehold.co/150x150/a0aec0/2d3748?text=Tech+Saga",
        title: "Tech Saga",
        newChapter: [
            {
                language: "English",
                chapter: "Chapter 5",
                releaseTime: "2 hours ago",
            },
        ],
        author: "Cyberpunker",
        scanlation: "Tech Team",
    },
    {
        id: 5,
        image: "https://placehold.co/150x150/cbd5e0/4a5568?text=Cosmic+Drifter",
        title: "Cosmic Drifter",
        newChapter: [
            {
                language: "English",
                chapter: "Chapter 78",
                releaseTime: "3 days ago",
            },
            {
                language: "French",
                chapter: "Chapitre 78",
                releaseTime: "3 days ago",
            },
        ],
        author: "Zane",
        scanlation: "Star Scans",
    },
    {
        id: 6,
        image: "https://placehold.co/150x150/e2e8f0/718096?text=Eternal+Chronicle",
        title: "Eternal Chronicle",
        newChapter: [
            {
                language: "English",
                chapter: "Chapter 101",
                releaseTime: "1 hour ago",
            },
        ],
        author: "Aria",
        scanlation: "Timeless Tales",
    },
    {
        id: 7,
        image: "https://placehold.co/150x150/ecc94b/2d3748?text=Urban+Legends",
        title: "Urban Legends",
        newChapter: [
            {
                language: "English",
                chapter: "Chapter 22",
                releaseTime: "5 days ago",
            },
            {
                language: "German",
                chapter: "Kapitel 22",
                releaseTime: "5 days ago",
            },
        ],
        author: "Leo",
        scanlation: "City Scans",
    },
    {
        id: 8,
        image: "https://placehold.co/150x150/ed64a6/4a5568?text=Dragon+Heart",
        title: "Dragon Heart",
        newChapter: [
            {
                language: "English",
                chapter: "Chapter 50",
                releaseTime: "12 hours ago",
            },
        ],
        author: "Ryuu",
        scanlation: "Flame Scans",
    },
    {
        id: 9,
        image: "https://placehold.co/150x150/d53f8c/718096?text=Witchcraft+Academy",
        title: "Witchcraft Academy",
        newChapter: [
            {
                language: "English",
                chapter: "Chapter 45",
                releaseTime: "2 days ago",
            },
        ],
        author: "Seraphina",
        scanlation: "Magic Scans",
    },
    {
        id: 10,
        image: "https://placehold.co/150x150/b32e5b/a0aec0?text=Galactic+Odyssey",
        title: "Galactic Odyssey",
        newChapter: [
            {
                language: "English",
                chapter: "Chapter 63",
                releaseTime: "4 days ago",
            },
            {
                language: "Russian",
                chapter: "Глава 63",
                releaseTime: "4 days ago",
            },
        ],
        author: "Orion",
        scanlation: "Cosmo Scans",
    },
];

export default function UpdatesPage() {
    return (
        <>
            <PageHeader children="Latest Update"/>
            <UpdateGrid data={updatesData}/>
            <UpdatePagination/>
        </>
    )
}