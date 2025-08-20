'use client'

import { useEffect } from 'react'

export default function AuthError({
                                           error,
                                           reset,
                                       }: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
            <h2 className="text-xl font-semibold">Something went wrong!</h2>
            <p className="text-gray-600">{error.message}</p>
            <button
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
                onClick={reset}
            >
                Try again
            </button>
        </div>
    )
}