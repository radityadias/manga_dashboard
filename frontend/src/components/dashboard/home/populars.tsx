import Image from "next/image";

interface PopularData {
    id: number;
    image: string;
    title: string;
    genre: string[];
}

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

export default function Populars() {
    return (
        <>
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
        </>
    )
}