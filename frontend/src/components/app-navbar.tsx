import {SidebarTrigger} from "@/components/ui/sidebar";
import {Separator} from "@/components/ui/separator";
import {Input} from "@/components/ui/input";
import {UserIcon, BookmarkIcon, SettingsIcon, LogOutIcon} from "lucide-react";
import AppSearch from "@/components/app-search";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function AppNavbar() {

    const UserDropdown = () => (
        <>
            <DropdownMenu >
                <DropdownMenuTrigger className="rounded-full">
                    <UserIcon/>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="p-5 w-56">
                    <DropdownMenuLabel className="text-center">Username</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem> <UserIcon/> Profile </DropdownMenuItem>
                    <DropdownMenuItem> <BookmarkIcon/> Saved </DropdownMenuItem>
                    <DropdownMenuItem> <SettingsIcon/> Settings</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem> <LogOutIcon/> Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )

    return (
        <>
            <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center gap-2 border-b bg-white">
                <div className="flex items-center gap-2 w-full max-w-[1280px] mx-auto px-4 sm:px-4 lg:px-0">
                    <SidebarTrigger />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <div className="grid w-full">
                        <div className="flex justify-between gap-2">
                            <AppSearch/>
                            <UserDropdown/>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}