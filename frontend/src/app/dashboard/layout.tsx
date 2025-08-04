import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    UserIcon
} from "lucide-react";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b">
                    <div className="flex items-center gap-2 px-3 w-full">
                        <SidebarTrigger />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <div className="grid w-full">
                            <div className="flex justify-between gap-2">
                                <Input placeholder="Search..." className="max-w-96 transition-all duration-300 sm:focus:max-w-[30vw] " />
                                <Button size="icon" variant="icon">
                                    <UserIcon/>
                                </Button>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4">
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}