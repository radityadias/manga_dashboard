import {PageHeader} from "@/components/page-header";
import PageGrid from "@/components/page-grid";

const historyData = [
    {
        "id": 1,
        "image": "https://placehold.co/150x150/2c3e50/ecf0f1?text=Aetheria+Bound",
        "title": "Aetheria Bound",
        "newChapter": [
            {
                "language": "English",
                "chapter": "Chapter 12",
                "releaseTime": "4 hours ago",
                "scanlation": "Aether Scans"
            }
        ],
        "author": "Lyra",
    },
    {
        "id": 2,
        "image": "https://placehold.co/150x150/34495e/bdc3c7?text=Crimson+Blade",
        "title": "Crimson Blade",
        "newChapter": [
            {
                "language": "English",
                "chapter": "Chapter 25",
                "releaseTime": "15 minutes ago",
                "scanlation": "Blade Scans",
            },
            {
                "language": "English",
                "chapter": "Chapter 26",
                "releaseTime": "15 minutes ago",
                "scanlation": "Blade Scans",
            },
            {
                "language": "French",
                "chapter": "Chapitre 25",
                "releaseTime": "15 minutes ago",
                "scanlation": "Blade Scans",
            }
        ],
        "author": "Kaito",
    },
    {
        "id": 3,
        "image": "https://placehold.co/150x150/7f8c8d/95a5a6?text=The+Last+Echo",
        "title": "The Last Echo",
        "newChapter": [
            {
                "language": "English",
                "chapter": "Chapter 42",
                "releaseTime": "1 day ago",
                "scanlation": "Echo Translators"
            }
        ],
        "author": "Elian",
    },
    {
        "id": 4,
        "image": "https://placehold.co/150x150/9b59b6/8e44ad?text=Cybernetic+Soul",
        "title": "Cybernetic Soul",
        "newChapter": [
            {
                "language": "English",
                "chapter": "Chapter 9",
                "releaseTime": "3 hours ago",
                "scanlation": "Cyber-Team"
            }
        ],
        "author": "Neo",
    },
    {
        "id": 5,
        "image": "https://placehold.co/150x150/3498db/2980b9?text=Stardust+Voyage",
        "title": "Stardust Voyage",
        "newChapter": [
            {
                "language": "English",
                "chapter": "Chapter 91",
                "releaseTime": "2 days ago",
                "scanlation": "Star Scans",
            },
            {
                "language": "Spanish",
                "chapter": "Capítulo 91",
                "releaseTime": "2 days ago",
                "scanlation": "Star Scans",
            }
        ],
        "author": "Celeste",
    },
    {
        "id": 6,
        "image": "https://placehold.co/150x150/16a085/1abc9c?text=Arcane+Labyrinth",
        "title": "Arcane Labyrinth",
        "newChapter": [
            {
                "language": "English",
                "chapter": "Chapter 112",
                "releaseTime": "1 hour ago",
                "scanlation": "Labyrinth Scans",
            }
        ],
        "author": "Corvus",
    },
    {
        "id": 7,
        "image": "https://placehold.co/150x150/f39c12/e67e22?text=Mythic+Guardians",
        "title": "Mythic Guardians",
        "newChapter": [
            {
                "language": "English",
                "chapter": "Chapter 35",
                "releaseTime": "6 days ago",
                "scanlation": "Guardian Scans"
            },
            {
                "language": "German",
                "chapter": "Kapitel 35",
                "releaseTime": "6 days ago",
                "scanlation": "Guardian Scans"
            }
        ],
        "author": "Dante",
    },
    {
        "id": 8,
        "image": "https://placehold.co/150x150/d35400/e67e22?text=Whispers+of+the+Forest",
        "title": "Whispers of the Forest",
        "newChapter": [
            {
                "language": "English",
                "chapter": "Chapter 60",
                "releaseTime": "10 hours ago",
                "scanlation": "Forest Scans"
            }
        ],
        "author": "Willow",
    },
    {
        "id": 9,
        "image": "https://placehold.co/150x150/c0392b/e74c3c?text=Runic+Symbols",
        "title": "Runic Symbols",
        "newChapter": [
            {
                "language": "English",
                "chapter": "Chapter 55",
                "releaseTime": "3 days ago",
                "scanlation": "Rune Translators"
            }
        ],
        "author": "Fiora",
    },
    {
        "id": 10,
        "image": "https://placehold.co/150x150/8e44ad/9b59b6?text=Dimensional+Rift",
        "title": "Dimensional Rift",
        "newChapter": [
            {
                "language": "English",
                "chapter": "Chapter 70",
                "releaseTime": "5 days ago",
                "scanlation": "Rift Scans"
            },
            {
                "language": "Russian",
                "chapter": "Глава 70",
                "releaseTime": "5 days ago",
                "scanlation": "Rift Scans"
            }
        ],
        "author": "Zephyr",
    }
];

export default function HistoryPage() {
    return (
        <>
            <PageHeader children="History" />
            <PageGrid className="grid-rows-10" card="full" data={historyData} />
        </>
    )
}