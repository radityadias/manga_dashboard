import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  HomeIcon,
  BookmarkIcon,
  BookIcon,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

const data = {
  navMain: [
    {
      title: "Home",
      icon: HomeIcon,
      url: "/",
      isActive: true,
    },
    {
      title: "Saved",
      icon: BookmarkIcon,
      url: "#",
      items: [
        {
          title: "Update",
          url: "/saved/updates",
          isActive: false,
        },
        {
          title: "Library",
          url: "/saved/library",
          isActive: false,
        },
        {
          title: "History",
          url: "/saved/history",
          isActive: false,
        }
      ],
    },
    {
      title: "Titles",
      icon: BookIcon,
      url: "#",
      items: [
        {
          title: "Advance Search",
          url: "/titles",
          isActive: false,
        },
        {
          title: "Recommendations",
          url: "#",
          isActive: false,
        },
        {
          title: "Latest Update",
          url: "/titles/updates",
          isActive: false,
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="bg-main-foreground">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="hover:bg-transparent hover:text-white active:bg-transparent " asChild>
              <Link href="/">
                <Image
                    src="/mangaku_logo.png"
                    alt="mangaku logo"
                    width={75}
                    height={75}
                    className="w-12 h-auto"
                />
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium text-2xl text-white">MangaGW</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-main-foreground">
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton className="hover:bg-main-accent active:bg-main-accent/50 active:text-yellow-primary/70 hover:text-yellow-primary" asChild>
                  <Link href={item.url} className="font-medium text-lg text-white ">
                    {item.icon && <item.icon />}
                    {item.title}
                  </Link>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub className="border-l-border-light ">
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={item.isActive} className="hover:bg-main-accent active:bg-main-accent/50 active:text-yellow-primary/70 text-white hover:text-yellow-primary">
                          <Link href={item.url}>{item.title}</Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
