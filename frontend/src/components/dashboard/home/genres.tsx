import Link from "next/link";

export default function Genres() {

    const genresData = [
        "Action",
        "Adventure",
        "Comedy",
        "Drama",
        "Fantasy",
        "Horror",
        "Mystery",
        "Psychological",
        "Romance",
        "Sci-Fi",
        "Slice of Life",
        "Sports",
        "Supernatural",
        "Thriller",
        "Mecha",
        "Isekai",
        "Harem",
        "Reverse Harem",
        "Shounen",
        "Shoujo",
        "Seinen",
        "Josei",
        "Ecchi",
        "Smut",
        "Gourmet",
        "Historical",
        "Martial Arts",
        "Medical",
        "Military",
        "Music",
        "Parody",
        "Post-Apocalyptic",
        "School Life",
        "Space",
        "Tragedy",
        "Vampire",
        "Super Power",
        "Magic",
        "Video Games",
        "Demons",
        "Dementia",
        "Samurai",
        "Gender Bender",
        "Yaoi",
        "Yuri",
        "Webtoons",
        "Award Winning",
        "Wuxia",
        "Xianxia",
        "Manhua",
        "Manhwa"
    ];

    return (
        <>
            <div className="w-full ">
                <h2 className="text-2xl font-semibold mb-4">Genres</h2>
                <div className="flex items-center gap-2 flex-wrap">
                    {genresData.map((genre : string, index : number) => (
                        <span className="p-2 rounded-md bg-gray-200 text-sm" key={index} title={genre} aria-label={genre} role="button">
                                    <Link href="#">{genre}</Link>
                                </span>
                    ))}
                </div>
            </div>
        </>
    )
}