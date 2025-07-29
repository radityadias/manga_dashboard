import { Card } from "@/components/ui/card"

export default function AuthLayout({children}: {children: React.ReactNode}) {
    return (
        <>
            <div className="flex min-h-screen items-center justify-center">
                <Card className="max-w-md w-full h-full">
                    {children}
                </Card>
            </div>
        </>
    )
}