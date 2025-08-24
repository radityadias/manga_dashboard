import {PageHeader} from "@/components/page-header";
import UpdateGrid from "@/components/dashboard/updates/update-grid";
import UpdatePagination from "@/components/dashboard/updates/update-pagination";

const updatesData = [
    {
        "id": 1,
        "image": "https://placehold.co/150x150/2d3748/cbd5e0?text=Evil+Baby",
        "title": "Evil Baby",
        "newChapter": [
            {
                "language": "English",
                "chapter": "Chapter 1",
                "releaseTime": "8 hours ago",
                "scanlation": "Nukozuke"
            }
        ],
        "author": "Nukozuke"
    },
    {
        "id": 2,
        "image": "https://placehold.co/150x150/4a5568/a0aec0?text=Shadow+Warrior",
        "title": "Shadow Warrior",
        "newChapter": [
            {
                "language": "English",
                "chapter": "Chapter 15",
                "releaseTime": "30 minutes ago",
                "scanlation": "Shadow Scans"
            },
            {
                "language": "English",
                "chapter": "Chapter 16",
                "releaseTime": "30 minutes ago",
                "scanlation": "Shadow Scans"
            },
            {
                "language": "Spanish",
                "chapter": "Capítulo 15",
                "releaseTime": "30 minutes ago",
                "scanlation": "Shadow Scans"
            }
        ],
        "author": "Kageyama"
    },
    {
        "id": 3,
        "image": "https://placehold.co/150x150/718096/e2e8f0?text=Mystic+Quest",
        "title": "Mystic Quest",
        "newChapter": [
            {
                "language": "English",
                "chapter": "Chapter 32",
                "releaseTime": "1 day ago",
                "scanlation": "Mystic Translators"
            }
        ],
        "author": "Elara"
    },
    {
        "id": 4,
        "image": "https://placehold.co/150x150/a0aec0/2d3748?text=Tech+Saga",
        "title": "Tech Saga",
        "newChapter": [
            {
                "language": "English",
                "chapter": "Chapter 5",
                "releaseTime": "2 hours ago",
                "scanlation": "Tech Team"
            }
        ],
        "author": "Cyberpunker"
    },
    {
        "id": 5,
        "image": "https://placehold.co/150x150/cbd5e0/4a5568?text=Cosmic+Drifter",
        "title": "Cosmic Drifter",
        "newChapter": [
            {
                "language": "English",
                "chapter": "Chapter 78",
                "releaseTime": "3 days ago",
                "scanlation": "Star Scans"
            },
            {
                "language": "French",
                "chapter": "Chapitre 78",
                "releaseTime": "3 days ago",
                "scanlation": "Star Scans"
            }
        ],
        "author": "Zane"
    },
    {
        "id": 6,
        "image": "https://placehold.co/150x150/e2e8f0/718096?text=Eternal+Chronicle",
        "title": "Eternal Chronicle",
        "newChapter": [
            {
                "language": "English",
                "chapter": "Chapter 101",
                "releaseTime": "1 hour ago",
                "scanlation": "Timeless Tales"
            }
        ],
        "author": "Aria"
    },
    {
        "id": 7,
        "image": "https://placehold.co/150x150/ecc94b/2d3748?text=Urban+Legends",
        "title": "Urban Legends",
        "newChapter": [
            {
                "language": "English",
                "chapter": "Chapter 22",
                "releaseTime": "5 days ago",
                "scanlation": "City Scans"
            },
            {
                "language": "German",
                "chapter": "Kapitel 22",
                "releaseTime": "5 days ago",
                "scanlation": "City Scans"
            }
        ],
        "author": "Leo"
    },
    {
        "id": 8,
        "image": "https://placehold.co/150x150/ed64a6/4a5568?text=Dragon+Heart",
        "title": "Dragon Heart",
        "newChapter": [
            {
                "language": "English",
                "chapter": "Chapter 50",
                "releaseTime": "12 hours ago",
                "scanlation": "Flame Scans"
            }
        ],
        "author": "Ryuu"
    },
    {
        "id": 9,
        "image": "https://placehold.co/150x150/d53f8c/718096?text=Witchcraft+Academy",
        "title": "Witchcraft Academy",
        "newChapter": [
            {
                "language": "English",
                "chapter": "Chapter 45",
                "releaseTime": "2 days ago",
                "scanlation": "Magic Scans"
            }
        ],
        "author": "Seraphina"
    },
    {
        "id": 10,
        "image": "https://placehold.co/150x150/b32e5b/a0aec0?text=Galactic+Odyssey",
        "title": "Galactic Odyssey",
        "newChapter": [
            {
                "language": "English",
                "chapter": "Chapter 63",
                "releaseTime": "4 days ago",
                "scanlation": "Cosmo Scans"
            },
            {
                "language": "Russian",
                "chapter": "Глава 63",
                "releaseTime": "4 days ago",
                "scanlation": "Cosmo Scans"
            }
        ],
        "author": "Orion"
    }
]

export default function UpdatesPage() {
    return (
        <>
            <PageHeader children="Followed Update"/>
            <UpdateGrid data={updatesData}/>
            <UpdatePagination/>
        </>
    )
}