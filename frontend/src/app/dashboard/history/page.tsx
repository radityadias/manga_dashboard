import {PageHeader} from "@/components/page-header";
import UpdateGrid from "@/components/dashboard/updates/update-grid";

const historyData = [
    {
        "id": 1,
        "image": "https://placehold.co/150x150/2c3e50/ecf0f1?text=Aetheria+Bound",
        "title": "Aetheria Bound",
        "newChapter": [
            {
                "language": "English",
                "chapter": "Chapter 12",
                "releaseTime": "4 hours ago"
            }
        ],
        "author": "Lyra",
        "scanlation": "Aether Scans"
    },
    {
        "id": 2,
        "image": "https://placehold.co/150x150/34495e/bdc3c7?text=Crimson+Blade",
        "title": "Crimson Blade",
        "newChapter": [
            {
                "language": "English",
                "chapter": "Chapter 25",
                "releaseTime": "15 minutes ago"
            },
            {
                "language": "English",
                "chapter": "Chapter 26",
                "releaseTime": "15 minutes ago"
            },
            {
                "language": "French",
                "chapter": "Chapitre 25",
                "releaseTime": "15 minutes ago"
            }
        ],
        "author": "Kaito",
        "scanlation": "Blade Scans"
    },
    {
        "id": 3,
        "image": "https://placehold.co/150x150/7f8c8d/95a5a6?text=The+Last+Echo",
        "title": "The Last Echo",
        "newChapter": [
            {
                "language": "English",
                "chapter": "Chapter 42",
                "releaseTime": "1 day ago"
            }
        ],
        "author": "Elian",
        "scanlation": "Echo Translators"
    },
    {
        "id": 4,
        "image": "https://placehold.co/150x150/9b59b6/8e44ad?text=Cybernetic+Soul",
        "title": "Cybernetic Soul",
        "newChapter": [
            {
                "language": "English",
                "chapter": "Chapter 9",
                "releaseTime": "3 hours ago"
            }
        ],
        "author": "Neo",
        "scanlation": "Cyber-Team"
    },
    {
        "id": 5,
        "image": "https://placehold.co/150x150/3498db/2980b9?text=Stardust+Voyage",
        "title": "Stardust Voyage",
        "newChapter": [
            {
                "language": "English",
                "chapter": "Chapter 91",
                "releaseTime": "2 days ago"
            },
            {
                "language": "Spanish",
                "chapter": "Capítulo 91",
                "releaseTime": "2 days ago"
            }
        ],
        "author": "Celeste",
        "scanlation": "Star Scans"
    },
    {
        "id": 6,
        "image": "https://placehold.co/150x150/16a085/1abc9c?text=Arcane+Labyrinth",
        "title": "Arcane Labyrinth",
        "newChapter": [
            {
                "language": "English",
                "chapter": "Chapter 112",
                "releaseTime": "1 hour ago"
            }
        ],
        "author": "Corvus",
        "scanlation": "Labyrinth Scans"
    },
    {
        "id": 7,
        "image": "https://placehold.co/150x150/f39c12/e67e22?text=Mythic+Guardians",
        "title": "Mythic Guardians",
        "newChapter": [
            {
                "language": "English",
                "chapter": "Chapter 35",
                "releaseTime": "6 days ago"
            },
            {
                "language": "German",
                "chapter": "Kapitel 35",
                "releaseTime": "6 days ago"
            }
        ],
        "author": "Dante",
        "scanlation": "Guardian Scans"
    },
    {
        "id": 8,
        "image": "https://placehold.co/150x150/d35400/e67e22?text=Whispers+of+the+Forest",
        "title": "Whispers of the Forest",
        "newChapter": [
            {
                "language": "English",
                "chapter": "Chapter 60",
                "releaseTime": "10 hours ago"
            }
        ],
        "author": "Willow",
        "scanlation": "Forest Scans"
    },
    {
        "id": 9,
        "image": "https://placehold.co/150x150/c0392b/e74c3c?text=Runic+Symbols",
        "title": "Runic Symbols",
        "newChapter": [
            {
                "language": "English",
                "chapter": "Chapter 55",
                "releaseTime": "3 days ago"
            }
        ],
        "author": "Fiora",
        "scanlation": "Rune Translators"
    },
    {
        "id": 10,
        "image": "https://placehold.co/150x150/8e44ad/9b59b6?text=Dimensional+Rift",
        "title": "Dimensional Rift",
        "newChapter": [
            {
                "language": "English",
                "chapter": "Chapter 70",
                "releaseTime": "5 days ago"
            },
            {
                "language": "Russian",
                "chapter": "Глава 70",
                "releaseTime": "5 days ago"
            }
        ],
        "author": "Zephyr",
        "scanlation": "Rift Scans"
    }
];

export default function HistoryPage() {
    return (
        <>
            <PageHeader children="History"/>
            <UpdateGrid data={historyData}/>
        </>
    )
}