import {AppSidebar} from "@/components/app-sidebar";
import {SidebarInset, SidebarProvider, SidebarRail} from "@/components/ui/sidebar";
import AppNavbar from "@/components/app-navbar";
import AppFooter from "@/components/app-footer";

export default function DashboardLayout({children} : {children: React.ReactNode}){
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarRail />
            <SidebarInset className="bg-main-dark">
                <AppNavbar/>
                    <div className="flex flex-1 flex-col gap-4 p-4 w-full container-wide">
                        {children}
                    </div>
                <AppFooter />
            </SidebarInset>
        </SidebarProvider>
    )
}