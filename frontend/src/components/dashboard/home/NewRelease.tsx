import Image from "next/image";

interface NewReleaseData {
    id: number;
    image: string;
    title: string;
}

interface PopularData {
    id: number;
    image: string;
    title: string;
    genre: string;
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

    return (
        <>
            <div className="mb-8">

                <div className="grid grid-cols-4 gap-6">
                   <div className="col-span-3">
                       <h2 className="text-2xl font-semibold mb-6 text-gray-800">New Release</h2>

                       <div className="grid grid-cols-5 gap-6">
                           {newReleaseData.map((release) => (
                               <Image
                                   key={release.id}
                                   src={release.image}
                                   alt={release.title}
                                   width={75}
                                   height={100}
                                   className="object-cover w-full h-48 rounded-md"
                               />
                           ))}
                        </div>
                   </div>
                    <div className="col-span-1">
                        <h2 className="text-xl font-medium mb-6 text-gray-800 text-center">Popular</h2>

                        <div className="grid grid-flow-row p-2 gap-2 max-h-96">
                            {popularData.map((popular) => (
                                <div className="grid grid-cols-3 gap-1">
                                    <div className="col-span-1">
                                        <Image
                                            key={popular.id}
                                            src={popular.image}
                                            alt={popular.title}
                                            width={75}
                                            height={100}
                                            className="object-cover w-full h-28 rounded-md"
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
                </div>

            </div>
        </>
    )
}