import SearchForm from "@/components/dashboard/advances-search/search-form";
import ItemGrid from "@/components/dashboard/advances-search/item-grid";
import AdvanceSearchPagination from "@/components/dashboard/advances-search/advance-search-pagination";

const searchData = [
    {
        "id": 1,
        "title": "The Last Sentinel",
        "image": "https://placehold.co/150x150/2d3748/cbd5e0?text=The+Last+Sentinel",
        "genre": ["Sci-Fi", "Action", "Adventure", "Post-Apocalyptic", "Thriller"],
        "rating": 9.2,
        "status": "Ongoing",
        "description": "A lone cyborg must protect the last remnants of humanity from an alien invasion."
    },
    {
        "id": 2,
        "title": "Whispers in the Woods",
        "image": "https://placehold.co/150x150/2d3748/cbd5e0?text=Whispers+in+the+Woods",
        "genre": ["Fantasy", "Mystery", "Supernatural", "Horror", "Drama"],
        "rating": 8.5,
        "status": "Completed",
        "description": "A young sorceress investigates a series of strange disappearances in a cursed forest."
    },
    {
        "id": 3,
        "title": "Neon City Blues",
        "image": "https://placehold.co/150x150/2d3748/cbd5e0?text=Neon+City+Blues",
        "genre": ["Cyberpunk", "Noir", "Crime", "Sci-Fi", "Mystery"],
        "rating": 9.8,
        "status": "Ongoing",
        "description": "A jaded detective uncovers a dark conspiracy in a futuristic metropolis."
    },
    {
        "id": 4,
        "title": "The Crimson Blade",
        "image": "https://placehold.co/150x150/2d3748/cbd5e0?text=The+Crimson+Blade",
        "genre": ["Historical", "Adventure", "Action", "Drama", "Martial Arts"],
        "rating": 7.6,
        "status": "Hiatus",
        "description": "A rogue samurai seeks revenge against the warlord who betrayed his clan."
    },
    {
        "id": 5,
        "title": "Starfall Academy",
        "image": "https://placehold.co/150x150/2d3748/cbd5e0?text=Starfall+Academy",
        "genre": ["Slice of Life", "School", "Comedy", "Sci-Fi", "Romance"],
        "rating": 8.9,
        "status": "Completed",
        "description": "Follow the daily lives of students training to become interstellar explorers."
    },
    {
        "id": 6,
        "title": "The Forgotten Kingdom",
        "image": "https://placehold.co/150x150/2d3748/cbd5e0?text=The+Forgotten+Kingdom",
        "genre": ["Fantasy", "Romance", "Adventure", "Drama", "Isekai"],
        "rating": 9.4,
        "status": "Ongoing",
        "description": "A princess escapes her arranged marriage and discovers a hidden kingdom."
    },
    {
        "id": 7,
        "title": "Code Red: Genesis",
        "image": "https://placehold.co/150x150/2d3748/cbd5e0?text=Code+Red:+Genesis",
        "genre": ["Sci-Fi", "Thriller", "Action", "Mystery", "Cyberpunk"],
        "rating": 8.7,
        "status": "Completed",
        "description": "A hacker races against time to stop a rogue AI from launching a global attack."
    },
    {
        "id": 8,
        "title": "Ethereal Echoes",
        "image": "https://placehold.co/150x150/2d3748/cbd5e0?text=Ethereal+Echoes",
        "genre": ["Supernatural", "Drama", "Mystery", "Slice of Life", "Fantasy"],
        "rating": 8.1,
        "status": "Ongoing",
        "description": "A medium helps restless spirits find peace while grappling with her own past."
    },
    {
        "id": 9,
        "title": "Galactic Gladiators",
        "image": "https://placehold.co/150x150/2d3748/cbd5e0?text=Galactic+Gladiators",
        "genre": ["Sci-Fi", "Sports", "Action", "Comedy", "Mecha"],
        "rating": 7.3,
        "status": "Completed",
        "description": "Rival teams of space pilots compete in high-stakes zero-gravity tournaments."
    },
    {
        "id": 10,
        "title": "The Clockwork Heart",
        "image": "https://placehold.co/150x150/2d3748/cbd5e0?text=The+Clockwork+Heart",
        "genre": ["Steampunk", "Adventure", "Fantasy", "Romance", "Mystery"],
        "rating": 8.4,
        "status": "Hiatus",
        "description": "An inventor with a mechanical heart embarks on a quest to find a legendary power source."
    }
]

export default function AdvanceSearch() {
    return (
        <>
            <SearchForm />
            <ItemGrid data={searchData} />
            <AdvanceSearchPagination />
        </>
    )
}