import {Spinner} from "@/components/spinner-loading";

export default function Loading() {
    return (
        <div className="w-full mx-auto">
            <Spinner size="large" className="text-white"/>
        </div>
    )
}