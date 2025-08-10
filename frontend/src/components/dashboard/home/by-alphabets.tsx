import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function ByAlphabets() {
    const alphabetData = [
        "#",
        "0-9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ];

    return (
        <>
            <div className="w-full mb-8">
                <h2 className="text-2xl font-semibold mb-4">By Alphabets</h2>
                <div className="flex flex-wrap justify-baseline items-center gap-2">
                    {alphabetData.map((alphabet : string, index : number) => (
                        <Link href="#" className="p-1 sm:p-2 bg-gray-200 rounded-sm" key={index}>
                            <span className="p-2 text-sm" key={index} title={alphabet}
                                  aria-label={alphabet} role="button">
                                {alphabet}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}