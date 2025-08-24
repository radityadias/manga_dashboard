import Link from "next/link";
import { cn } from "@/lib/utils"

export const SectionHeader = ({className, children,...props} : React.ComponentProps<"div">) => {
  return (
      <div
          className={cn("flex items-center justify-between mb-4 text-white ", className)}
          {...props}
      >
          <h2 className="text-2xl font-semibold">{children}</h2>
          <Link href="#" className="text-md font-medium text-main-yellow hover:text-main-yellow/70 active:text-main-yellow/50">See more...</Link>
      </div>
  );
};