import {SidebarTrigger} from "@/components/ui/sidebar";
import {Separator} from "@/components/ui/separator";
import {UserIcon, BookmarkIcon, SettingsIcon, LogOutIcon} from "lucide-react";
import AppSearch from "@/components/app-search";
import Link from "next/link";
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
            <DropdownMenu>
                <DropdownMenuTrigger className="rounded-full focus:outline-none">
                    <UserIcon className="text-white"/>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="p-5 w-56 bg-main-foreground border-none text-white">
                    <DropdownMenuLabel className="text-center">Username</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem> <UserIcon className="text-white"/> Profile </DropdownMenuItem>
                    <DropdownMenuItem> <BookmarkIcon className="text-white"/> Saved </DropdownMenuItem>
                    <DropdownMenuItem> <SettingsIcon className="text-white"/> Settings</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem> <LogOutIcon className="text-white"/> Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )

    return (
        <>
            <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center gap-2 border-b border-b-border-light bg-main-dark">
                <div className="flex items-center gap-2 w-full max-w-[1280px] mx-auto px-4">
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