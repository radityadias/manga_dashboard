import { cn } from "@/lib/utils"
import {ChevronLeft} from "lucide-react";
import Link from "next/link";

function PageHeader({ className, children, ...props } : React.ComponentProps<"div">) {
    return (
        <div className={cn("flex gap-2 items-center mb-4 relative text-white", className)} {...props}>
            <Link href="/" className="rounded-full p-1 hover:bg-main-foreground ">
                <ChevronLeft/>
            </Link>
            <h2 className="text-2xl font-semibold">{children}</h2>
        </div>
    )
}

export { PageHeader }