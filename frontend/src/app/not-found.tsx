import Link from 'next/link'
import {Button} from "@/components/ui/button";

export default function NotFound() {
    return (
        <>
            <div className="w-full min-h-screen flex flex-col items-center justify-center gap-4 ">
                <h2 className="text-9xl font-semibold">
                    404
                </h2>

                <p className="text-5xl">
                    Page Not Found!
                </p>

                <p className="text-2xl">
                    We're sorry, but the page you requested could not be found
                </p>

                <Link href="/">
                    <Button variant="default">
                            Back to Dashboard
                    </Button>
                </Link>
            </div>
        </>
    )
}