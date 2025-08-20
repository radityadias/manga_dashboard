import Image from "next/image";
import {RecommendationData} from "@/types/dashboard/recommendation-data";

interface MangaCardProps {
    item: RecommendationData;
}

export default function RecommendationManga({item} : MangaCardProps) {
    const eager_load_count = 2;

    return (
        <div
            className="rounded-lg shadow-lg overflow-hidden bg-[#F5F5F5] p-2 sm:p-4 transition-transform duration-300 hover:scale-[1.02] flex flex-col"
        >
            <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1 flex justify-center">
                    <Image
                        src={item.image}
                        alt={item.title}
                        width={75}
                        height={75}
                        className="rounded-md w-full sm:h-64 object-cover"
                        loading={item.id < eager_load_count ? "eager" : "lazy"}
                    />
                </div>

                <div className="col-span-3 sm:col-span-4 flex flex-col justify-between">
                    <div>
                        {/* Title */}
                        <h3 className="text-lg font-medium text-gray-900 mb-1 leading-tight">
                            {item.title}
                        </h3>
                        {/* Genre */}
                        <p className="text-sm text-gray-500 mb-2">{item.genre}</p>
                        {/* Description */}
                        <p className="text-sm text-gray-600 line-clamp-3">
                            {item.description}
                        </p>
                    </div>

                    <div className="mt-4 flex justify-between items-center">
                        <p className="text-sm text-gray-700">
                            by <span className="font-medium">{item.author}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}