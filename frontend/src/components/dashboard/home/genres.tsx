import Link from "next/link";

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

export default function Genres() {
    return (
        <>
            <div className="w-full ">
                <h2 className="text-2xl font-semibold mb-4">Genres</h2>
                <div className="flex items-center gap-2 flex-wrap">
                    {genresData.map((genre : string, index : number) => (
                      <Link
                        href="#"
                        className="p-1 sm:p-2 bg-gray-200 rounded-sm"
                        key={index}
                      >
                          <span>
                              <p className="text-sm">{genre}</p>
                          </span>
                      </Link>
                    ))}
                </div>
            </div>
        </>
    )
}