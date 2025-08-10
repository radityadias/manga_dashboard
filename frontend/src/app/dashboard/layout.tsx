import { AppSidebar } from "@/components/app-sidebar"
import AppFooter  from "@/components/app-footer"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import AppNavbar from "@/components/app-navbar";
import {
    UserIcon
} from "lucide-react";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
    SidebarRail,
} from "@/components/ui/sidebar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <SidebarProvider>
                <AppSidebar />
                <SidebarRail />
                <SidebarInset>
                   <AppNavbar/>
                    <div className="flex flex-1 flex-col gap-4 p-4">
                        {children}
                    </div>
                    <AppFooter />
                </SidebarInset>
            </SidebarProvider>
        </>
    )
}