import Image from "next/image"
import Link from "next/link";

interface NewReleaseData {
    id: number;
    image: string;
    title: string;
}

interface PopularData {
    id: number;
    image: string;
    title: string;
    genre: string[];
}

export  default  function NewRelease () {
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

    const popularData = [
        {
            id: 1,
            image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Evil+Baby",
            title: "Evil Baby",
            genre: ["Action", "Adventures", "Slice of Life"]
        },
        {
            id: 2,
            image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Isekai+Doctor",
            title: "THE ISEKAI DOCTOR",
            genre: ["Fantasy", "Isekai", "Medical"]
        },
        {
            id: 3,
            image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Nukozuke",
            title: "Nukozuke!",
            genre: ["Shojo", "Slice-of-Life", "Comedy"]
        },
        {
            id: 4,
            image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Anata+Mitai",
            title: "Anata Mitai ni",
            genre: ["Romance", "Yuri"]
        },
        {
            id: 5,
            image: "https://placehold.co/150x150/2d3748/cbd5e0?text=Apologize",
            title: "Is It Too Late to Apologize ",
            genre: ["Pop Rock", "R&B"]
        },
    ]

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
            <div className="mb-8 flex justify-between gap-5 ">
                <div className="flex flex-1 flex-col gap-6">
                    <div className="w-full">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-semibold mb-4">New Release</h2>
                            <Link href="#" className="text-md font-medium ">See more...</Link>
                        </div>
                        <div className="order-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                            {newReleaseData.map((release : NewReleaseData) => (
                                <Image
                                    key={release.id}
                                    src={release.image}
                                    alt={release.image}
                                    width={125}
                                    height={150}
                                    className="object-cover w-full h-52 rounded-md"
                                />
                            ))}
                        </div>
                    </div>

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
                </div>

                <aside className="order-2 right-0 w-72 h-fit z-40 bg-gray-200 rounded-md hidden lg:block">
                    <h2 className="font-medium text-center p-2">Popular</h2>

                    <div className="h-full p-2">
                        <div className="grid grid-rows-5 gap-2">
                            {popularData.map((popular : PopularData) => (
                                <div className="grid grid-cols-3 gap-1 h-28" key={popular.id}>
                                    <div className="col-span-1">
                                        <Image
                                            key={popular.id}
                                            src={popular.image}
                                            alt={popular.title}
                                            width={75}
                                            height={100}
                                            className="object-cover w-full h-full rounded-md"
                                        />
                                    </div>
                                    <div className="col-span-2 flex flex-col gap-1">
                                        <p className="font-medium text-medium">{popular.title}</p>
                                        <p className="text-sm">
                                            Genres: {popular.genre.map((genre, index) => (
                                            <span key={index}>{genre}{index < popular.genre.length - 1 ? ', ' : ''}</span>
                                        ))}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </>
    )
}