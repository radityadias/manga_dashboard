import Link from "next/link";
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
    className?: string;
    title: string;
    path: string | "#";
}

export const SectionHeader = ({className, title, path} : SectionHeaderProps) => {
  return (
      <div className={cn("flex items-center justify-between mb-4 text-white ", className)}>
          <h2 className="text-2xl font-semibold">{title}</h2>
          <Link href={`/titles${path}`} className="text-md font-medium text-yellow-primary hover:text-yellow-primary/80 active:text-yellow-primary/60 ">See more...</Link>
      </div>
  );
};