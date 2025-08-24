import UpdateGrid from "@/components/dashboard/updates/update-grid";
import {PageHeader} from "@/components/page-header";

const updatesData = [
    {
        "id": 1,
        "image": "https://placehold.co/150x150/8a2be2/ffffff?text=Cyber+Echoes",
        "title": "Cyber Echoes",
        "newChapter": [
            {
                "language": "English",
                "chapter": "Chapter 42",
                "releaseTime": "2 hours ago",
                "scanlation": "Neon Syndicate"
            }
        ],
        "author": "Arin Fae"
    },
    {
        "id": 2,
        "image": "https://placehold.co/150x150/2f4f4f/e0e0e0?text=The+Labyrinth+Heart",
        "title": "The Labyrinth Heart",
        "newChapter": [
            {
                "language": "English",
                "chapter": "Chapter 105",
                "releaseTime": "5 hours ago",
                "scanlation": "Dreamweavers"
            },
            {
                "language": "Japanese",
                "chapter": "第105章",
                "releaseTime": "5 hours ago",
                "scanlation": "Dreamweavers"
            }
        ],
        "author": "Akira Kurosaki"
    },
    {
        "id": 3,
        "image": "https://placehold.co/150x150/d2b48c/4a4a4a?text=Stonefall+Academy",
        "title": "Stonefall Academy",
        "newChapter": [
            {
                "language": "English",
                "chapter": "Chapter 23",
                "releaseTime": "12 hours ago",
                "scanlation": "Gargoyle Translators"
            }
        ],
        "author": "Milo Finch"
    },
    {
        "id": 4,
        "image": "https://placehold.co/150x150/5f9ea0/ffffff?text=Cosmic+Throne",
        "title": "Cosmic Throne",
        "newChapter": [
            {
                "language": "English",
                "chapter": "Chapter 8",
                "releaseTime": "1 day ago",
                "scanlation": "Stellar Scans"
            }
        ],
        "author": "Vera Khan"
    },
    {
        "id": 5,
        "image": "https://placehold.co/150x150/cd5c5c/fffacd?text=Crimson+Blade",
        "title": "Crimson Blade",
        "newChapter": [
            {
                "language": "English",
                "chapter": "Chapter 112",
                "releaseTime": "18 hours ago",
                "scanlation": "Blade Group"
            },
            {
                "language": "German",
                "chapter": "Kapitel 112",
                "releaseTime": "18 hours ago",
                "scanlation": "Blade Group"
            }
        ],
        "author": "Kazuo Koike"
    },
    {
        "id": 6,
        "image": "https://placehold.co/150x150/4682b4/f0f8ff?text=Soul+Wielder",
        "title": "Soul Wielder",
        "newChapter": [
            {
                "language": "English",
                "chapter": "Chapter 70",
                "releaseTime": "3 days ago",
                "scanlation": "Spirit Scans"
            }
        ],
        "author": "Seraphina Hale"
    },
    {
        "id": 7,
        "image": "https://placehold.co/150x150/daa520/2c2c2c?text=Arcane+Relics",
        "title": "Arcane Relics",
        "newChapter": [
            {
                "language": "English",
                "chapter": "Chapter 28",
                "releaseTime": "1 day ago",
                "scanlation": "Relic Raiders"
            },
            {
                "language": "French",
                "chapter": "Chapitre 28",
                "releaseTime": "1 day ago",
                "scanlation": "Relic Raiders"
            }
        ],
        "author": "Leo Valerius"
    },
    {
        "id": 8,
        "image": "https://placehold.co/150x150/9370db/ffffff?text=Starfall+Symphony",
        "title": "Starfall Symphony",
        "newChapter": [
            {
                "language": "English",
                "chapter": "Chapter 99",
                "releaseTime": "4 hours ago",
                "scanlation": "Cosmo Collective"
            }
        ],
        "author": "Orion Blackwood"
    },
    {
        "id": 9,
        "image": "https://placehold.co/150x150/d8bfd8/5c5c5c?text=Winter's+Crown",
        "title": "Winter's Crown",
        "newChapter": [
            {
                "language": "English",
                "chapter": "Chapter 15",
                "releaseTime": "2 days ago",
                "scanlation": "Frost Scans"
            }
        ],
        "author": "Anya Frost"
    },
    {
        "id": 10,
        "image": "https://placehold.co/150x150/b0c4de/2d3748?text=Echoes+of+Time",
        "title": "Echoes of Time",
        "newChapter": [
            {
                "language": "English",
                "chapter": "Chapter 61",
                "releaseTime": "1 hour ago",
                "scanlation": "Epoch Scans"
            },
            {
                "language": "Spanish",
                "chapter": "Capítulo 61",
                "releaseTime": "1 hour ago",
                "scanlation": "Epoch Scans"
            }
        ],
        "author": "Dorian Grey"
    }
]

export default function TitleLatestUpdatesPage() {
    return (
        <>
            <PageHeader children="Latest Updates"/>

            <UpdateGrid data={updatesData} />
        </>
    )
}