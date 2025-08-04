import * as React from "react"
import { GalleryVerticalEnd } from "lucide-react"
import Image from "next/image"
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
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Home",
      icon: HomeIcon,
      url: "#",
    },
    {
      title: "Saved",
      icon: BookmarkIcon,
      url: "#",
      items: [
        {
          title: "Library",
          url: "#",
        },
        {
          title: "History",
          url: "#",
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
        },
        {
          title: "Recommendations",
          url: "#",
        },
        {
          title: "Latest Updates",
          url: "#",
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
                <Image src="/mangaku_logo.png" alt="mangaku logo" width={75} height={75} />
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
                  <a href={item.url} className="font-medium text-lg">
                    {item.icon && <item.icon />}
                    {item.title}
                  </a>
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
      <SidebarRail />
    </Sidebar>
  )
}
