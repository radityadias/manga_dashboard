import { cn } from "@/lib/utils"
import {ChevronLeft} from "lucide-react";
import Link from "next/link";

function PageHeader({ className, children, ...props }: React.ComponentProps<"div">) {
    return (
        <div className={cn("flex gap-2 items-center mb-4 relative", className)} {...props}>
            <Link href="/dashboard" className="rounded-full p-1 hover:bg-gray-300 ">
                <ChevronLeft/>
            </Link>
            <h2 className="text-2xl font-semibold">{children}</h2>
        </div>
    )
}

export { PageHeader }