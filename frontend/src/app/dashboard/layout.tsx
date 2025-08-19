import AppFooter  from "@/components/app-footer"
import AppNavbar from "@/components/app-navbar";
import { AppSidebar } from "@/components/app-sidebar"
import {
    SidebarInset,
    SidebarProvider,
    SidebarRail,
} from "@/components/ui/sidebar"

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <SidebarProvider>
                <AppSidebar />
                <SidebarRail />
                <SidebarInset>
                   <AppNavbar/>
                        <div className="flex flex-1 flex-col gap-4 p-4 w-full container-wide">
                            {children}
                        </div>
                    <AppFooter />
                </SidebarInset>
            </SidebarProvider>
        </>
    )
}