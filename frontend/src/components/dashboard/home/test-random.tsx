"use client"

import Link from "next/link"

export default function TestRandoms() {

    return (
        <>
            <div>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-semibold">Random Manga</h2>
                    <Link href="#" className="text-md font-medium hover:underline">
                        See more...
                    </Link>
                </div>

            </div>
        </>
    )
}