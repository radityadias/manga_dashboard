import {Skeleton} from "@/components/ui/skeleton";

export default function AuthLoading() {
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-4">
                <Skeleton className="w-[382px] h-[484px]"/>
                <Skeleton className="w-[100px] h-[32px]"/>
            </div>
        </>
    )
}