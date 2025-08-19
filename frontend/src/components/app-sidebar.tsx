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
      url: "/dashboard",
      isActive: true,
    },
    {
      title: "Saved",
      icon: BookmarkIcon,
      url: "#",
      items: [
        {
          title: "Updates",
          url: "/dashboard/updates",
          isActive: false,
        },
        {
          title: "Library",
          url: "/dashboard/library",
          isActive: false,
        },
        {
          title: "History",
          url: "/dashboard/history",
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
          url: "#",
          isActive: false,
        },
        {
          title: "Recommendations",
          url: "#",
          isActive: false,
        },
        {
          title: "Latest Updates",
          url: "/dashboard/updates",
          isActive: false,
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <Image
                    src="/mangaku_logo.png"
                    alt="mangaku logo"
                    width={75}
                    height={75}
                    className="w-12 h-auto"
                />
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium text-2xl">MangaKu</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link href={item.url} className="font-medium text-lg">
                    {item.icon && <item.icon />}
                    {item.title}
                  </Link>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={item.isActive}>
                          <a href={item.url}>{item.title}</a>
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
