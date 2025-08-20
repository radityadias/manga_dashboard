import dynamic from "next/dynamic";

// Eager (default) Loading Components
import RecommendationsCarousel from "@/components/dashboard/home/recommendations/recommendation";
import LatestUpdate from "@/components/dashboard/home/latest-updates/latest-update";

// Lazy Loading Components
const Randoms = dynamic(() => import("@/components/dashboard/home/randoms/random"))
const NewRelease = dynamic(() => import("@/components/dashboard/home/new-release/new-release"))
const Populars = dynamic(() => import("@/components/dashboard/home/populars"))
const Genres = dynamic(() => import("@/components/dashboard/home/genres/genre"))
const ByAlphabets = dynamic(() => import("@/components/dashboard/home/by-alphabets"))

const recommendationsData = [
    {
        id: 1,
        image: "https://placehold.co/150x150/f0f4f8/94a3b8?text=Image+1",
        title: "The Silent Forest",
        genre: "Fantasy",
        description: "An epic tale of a lone warrior's journey through an enchanted, desolate forest to confront an ancient evil.",
        author: "A. L. Thompson",
    },
    {
        id: 2,
        image: "https://placehold.co/150x150/f0f4f8/94a3b8?text=Image+2",
        title: "City of Shadows",
        genre: "Mystery",
        description: "A detective must solve a series of mysterious disappearances in a futuristic city where nothing is as it seems.",
        author: "J. K. Rowling",
    },
    {
        id: 3,
        image: "https://placehold.co/150x150/f0f4f8/94a3b8?text=Image+3",
        title: "Stars Beyond",
        genre: "Sci-Fi",
        description: "A crew of explorers discovers a new habitable planet, but they soon find that they are not alone.",
        author: "Isaac Asimov",
    },
    {
        id: 4,
        image: "https://placehold.co/150x150/f0f4f8/94a3b8?text=Image+4",
        title: "The Last Scroll",
        genre: "Adventure",
        description: "A thrilling adventure across continents to find a legendary artifact that can change the fate of the world.",
        author: "H. G. Wells",
    },
    {
        id: 5,
        image: "https://placehold.co/150x150/f0f4f8/94a3b8?text=Image+5",
        title: "The Azure Key",
        genre: "Fantasy",
        description: "A young apprentice discovers a magical key that unlocks ancient secrets and forgotten worlds.",
        author: "S. K. White",
    },
    {
        id: 6,
        image: "https://placehold.co/150x150/f0f4f8/94a3b8?text=Image+6",
        title: "Echoes of the Past",
        genre: "Historical Fiction",
        description: "A historian uncovers a hidden diary revealing a forgotten romance during a time of war and upheaval.",
        author: "M. A. Parker",
    },
];

const latestUpdatesData = [
    {
        id: 1,
        image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Evil+Baby",
        title: "Evil Baby",
        chapter: "Ch. 22 - Bathtub",
        translator: "Lilith Scanlatio...",
        updated_at: "3 minutes ago",
    },
    {
        id: 2,
        image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Isekai+Doctor",
        title: "THE ISEKAI DOCTOR Any s...",
        chapter: "Vol. 3 Ch. 12 - phon lo...",
        translator: "Mùa Đông Buốt",
        updated_at: "3 minutes ago",
    },
    {
        id: 3,
        image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Nukozuke",
        title: "Nukozuke!",
        chapter: "Vol. 12 Ch. 281",
        translator: "TOOR Scans",
        updated_at: "4 minutes ago",
    },
    {
        id: 4,
        image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Anata+Mitai",
        title: "Anata Mitai ni",
        chapter: "Ch. 1",
        translator: "Koronesuke",
        updated_at: "9 minutes ago",
    },
    {
        id: 5,
        image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Apologize",
        title: "Is It Too Late to Apologize N...",
        chapter: "Ch. 18 - Clingy",
        translator: "Lilith Scanlati...",
        updated_at: "10 minutes ago",
    },
    {
        id: 6,
        image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Bleach",
        title: "Bleach (Official Colored)",
        chapter: "Vol. 54 Ch. 479 - Adio...",
        translator: "Kitsuna Scans...",
        updated_at: "13 minutes ago",
    },
    {
        id: 7,
        image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Isekai+Ojisan",
        title: "Isekai Ojisan",
        chapter: "Vol. 14 Ch. 70",
        translator: "Home Hero S...",
        updated_at: "23 minutes ago",
    },
    {
        id: 8,
        image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Harmony",
        title: "Harmony",
        chapter: "Vol. 4 Ch. 31 - 31",
        translator: "TrafalgarSca...",
        updated_at: "41 minutes ago",
    },
    {
        id: 9,
        image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Ryuu+Ron",
        title: "Ryuu: Ron",
        chapter: "Vol. 7 Ch. 8 - Tel...",
        translator: "Japanese Sp...",
        updated_at: "50 minutes ago",
    },
    {
        id: 10,
        image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Male+Lead",
        title: "The Male Lead Is Obsessed...",
        chapter: "Vol. 1 Ch. 6",
        translator: "Princess Alis...",
        updated_at: "50 minutes ago",
    },
    {
        id: 11,
        image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Grand+Finale",
        title: "Grand Finale",
        chapter: "Ch. 4",
        translator: "Carecas Scan",
        updated_at: "1 hour ago",
    },
    {
        id: 12,
        image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Shoukan+Ken",
        title: "Metcha Shoukan Sareta Ken",
        chapter: "Ch. 20",
        translator: "NiceRD",
        updated_at: "1 hour ago",
    },
    {
        id: 13,
        image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Yancha+Gal",
        title: "Yancha Gal no Anjou-san",
        chapter: "Vol. 12 Ch. 145 - Anjou...",
        translator: "Dropz S...",
        updated_at: "1 hour ago",
    },
    {
        id: 14,
        image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Kubiwa",
        title: "Hazureta Kubiwa wo Suter...",
        chapter: "Vol. 1 Ch. 3",
        translator: "Morse_Fellow's Upl...",
        updated_at: "1 hour ago",
    },
    {
        id: 15,
        image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Black+Channel",
        title: "Black Channel",
        chapter: "Vol. 10 Ch. 45 -",
        translator: "Onechan Scans",
        updated_at: "1 hour ago",
    },
    {
        id: 16,
        image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Starting+Today",
        title: "Starting Today, We're Child...",
        chapter: "Vol. 7 Ch. 61 -",
        translator: "No Group",
        updated_at: "1 hour ago",
    },
    {
        id: 17,
        image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Magical+Girl",
        title: "Magical Girl Dandelion",
        chapter: "Vol. 2 Ch. 7",
        translator: "SNT Trans",
        updated_at: "2 hours ago",
    },
    {
        id: 18,
        image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Say+It",
        title: "Say It With Your Body",
        chapter: "Episode 3,part 2 of 8",
        translator: "Ha_leul",
        updated_at: "2 hours ago",
    },
    {
        id: 19,
        image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Pure",
        title: "Pure 0.01mm",
        chapter: "Vol. 1 Ch. 6 - Hen Ho...",
        translator: "SNT Trans",
        updated_at: "2 hours ago",
    },
    {
        id: 20,
        image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Akazukin",
        title: "Akazukin ni Taberareta Oo...",
        chapter: "Vol. 7 Ch. 61 - The...",
        translator: "Overthink Scans",
        updated_at: "2 hours ago",
    },
    {
        id: 21,
        image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Coronica",
        title: "Coronica no Nou",
        chapter: "Ch. 11",
        translator: "No Group",
        updated_at: "2 hours ago",
    },
    {
        id: 22,
        image: "https://placehold.co/150x150/2d3748/cbd5e0?text=MAD",
        title: "MAD",
        chapter: "Ch. 8 - Trứng phạt",
        translator: "Levan Pollka",
        updated_at: "2 hours ago",
    },
    {
        id: 23,
        image: "https://placehold.co/150x150/2d3748/cbd5e0?text=World+Teacher",
        title: "World Teacher - Isekai",
        chapter: "Vol. 15 Ch. 81",
        translator: "An-san Translati...",
        updated_at: "2 hours ago",
    },
    {
        id: 24,
        image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Miharou",
        title: "Miharou no Senjou",
        chapter: "Vol. 1 Ch. 1 - First Fist",
        translator: "Katatoribito",
        updated_at: "2 hours ago",
    },
];

const randomsData = [
    {
        id: 1,
        image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Evil+Baby",
        title: "Evil Baby",
    },
    {
        id: 2,
        image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Isekai+Doctor",
        title: "THE ISEKAI DOCTOR",
    },
    {
        id: 3,
        image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Nukozuke",
        title: "Nukozuke!",
    },
    {
        id: 4,
        image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Anata+Mitai",
        title: "Anata Mitai ni",
    },
    {
        id: 5,
        image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Apologize",
        title: "Is It Too Late to Apologize ",
    },
    {
        id: 6,
        image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Isekai+Ojisan",
        title: "Isekai Ojisan",
    },
]

const newReleaseData = [
    {
        id: 1,
        image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Evil+Baby",
        title: "Evil Baby",
    },
    {
        id: 2,
        image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Isekai+Doctor",
        title: "THE ISEKAI DOCTOR",
    },
    {
        id: 3,
        image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Nukozuke",
        title: "Nukozuke!",
    },
    {
        id: 4,
        image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Anata+Mitai",
        title: "Anata Mitai ni",
    },
    {
        id: 5,
        image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Apologize",
        title: "Is It Too Late to Apologize ",
    },
    {
        id: 6,
        image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Isekai+Ojisan",
        title: "Isekai Ojisan",
    },
    {
        id: 7,
        image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Nukozuke",
        title: "Nukozuke!",
    },
    {
        id: 8,
        image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Anata+Mitai",
        title: "Anata Mitai ni",
    },
    {
        id: 9,
        image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Apologize",
        title: "Is It Too Late to Apologize ",
    },
    {
        id: 10,
        image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Isekai+Ojisan",
        title: "Isekai Ojisan",
    },

]

const genresData = [
    {
        "id": 1,
        "name": "Action"
    },
    {
        "id": 2,
        "name": "Adventure"
    },
    {
        "id": 3,
        "name": "Comedy"
    },
    {
        "id": 4,
        "name": "Drama"
    },
    {
        "id": 5,
        "name": "Fantasy"
    },
    {
        "id": 6,
        "name": "Horror"
    },
    {
        "id": 7,
        "name": "Mystery"
    },
    {
        "id": 8,
        "name": "Psychological"
    },
    {
        "id": 9,
        "name": "Romance"
    },
    {
        "id": 10,
        "name": "Sci-Fi"
    },
    {
        "id": 11,
        "name": "Slice of Life"
    },
    {
        "id": 12,
        "name": "Sports"
    },
    {
        "id": 13,
        "name": "Supernatural"
    },
    {
        "id": 14,
        "name": "Thriller"
    },
    {
        "id": 15,
        "name": "Mecha"
    },
    {
        "id": 16,
        "name": "Isekai"
    },
    {
        "id": 17,
        "name": "Harem"
    },
    {
        "id": 18,
        "name": "Reverse Harem"
    },
    {
        "id": 19,
        "name": "Shounen"
    },
    {
        "id": 20,
        "name": "Shoujo"
    },
    {
        "id": 21,
        "name": "Seinen"
    },
    {
        "id": 22,
        "name": "Josei"
    },
    {
        "id": 23,
        "name": "Ecchi"
    },
    {
        "id": 24,
        "name": "Smut"
    },
    {
        "id": 25,
        "name": "Gourmet"
    },
    {
        "id": 26,
        "name": "Historical"
    },
    {
        "id": 27,
        "name": "Martial Arts"
    },
    {
        "id": 28,
        "name": "Medical"
    },
    {
        "id": 29,
        "name": "Military"
    },
    {
        "id": 30,
        "name": "Music"
    },
    {
        "id": 31,
        "name": "Parody"
    },
    {
        "id": 32,
        "name": "Post-Apocalyptic"
    },
    {
        "id": 33,
        "name": "School Life"
    },
    {
        "id": 34,
        "name": "Space"
    },
    {
        "id": 35,
        "name": "Tragedy"
    },
    {
        "id": 36,
        "name": "Vampire"
    },
    {
        "id": 37,
        "name": "Super Power"
    },
    {
        "id": 38,
        "name": "Magic"
    },
    {
        "id": 39,
        "name": "Video Games"
    },
    {
        "id": 40,
        "name": "Demons"
    },
    {
        "id": 41,
        "name": "Dementia"
    },
    {
        "id": 42,
        "name": "Samurai"
    },
    {
        "id": 43,
        "name": "Gender Bender"
    },
    {
        "id": 44,
        "name": "Yaoi"
    },
    {
        "id": 45,
        "name": "Yuri"
    },
    {
        "id": 46,
        "name": "Webtoons"
    },
    {
        "id": 47,
        "name": "Award Winning"
    },
    {
        "id": 48,
        "name": "Wuxia"
    },
    {
        "id": 49,
        "name": "Xianxia"
    },
    {
        "id": 50,
        "name": "Manhua"
    },
    {
        "id": 51,
        "name": "Manhwa"
    }
]

export default function HomePage() {
    return (
        <div>
            <RecommendationsCarousel data={recommendationsData}/>
            <LatestUpdate data={latestUpdatesData}/>
            <Randoms data={randomsData}/>
            <div className="flex justify-between gap-5 mb-8">
                <div className="flex flex-1 flex-col gap-6">
                    <NewRelease data={newReleaseData}/>
                    <Genres data={genresData}/>
                </div>
                <Populars/>
            </div>
            <ByAlphabets/>
        </div>
    )
}