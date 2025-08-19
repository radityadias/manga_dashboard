import Link from "next/link";
import {ImagesIcon} from "lucide-react";

export default function LibraryHeader() {
    return (
        <div className="flex flex-row justify-between items-center mb-4">
            <p className="text-xl">10 Titles</p>
            <div className="flex">
                    <span className="p-2 bg-gray-200">
                        <Link href="#"><ImagesIcon/></Link>
                    </span>
                <span className="p-2 bg-gray-200">
                        <Link href="#"><ImagesIcon/></Link>
                    </span>
                <span className="p-2 bg-gray-200">
                        <Link href="#"><ImagesIcon/></Link>
                    </span>
            </div>
        </div>
    )
}