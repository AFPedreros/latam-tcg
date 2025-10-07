"use client";

import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { paths } from "@/config/paths";
import { cn } from "@/utils";
import { NavbarItem } from "./navbar-item";
import { NavbarSearchBar } from "./navbar-search-bar";
import { NavbarSidebar } from "./navbar-sidebar";
import { Button } from "./ui/button";

export const Navbar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const navigation = [{ name: "Cartas", href: paths.public.cards.getHref() }];

  const isHome = pathname === paths.home.getHref();

  return (
    <nav
      className={cn(
        "top-0 z-40 flex h-20 items-center justify-between gap-x-10 border-border/35 border-b bg-[#242423] px-6 text-center font-medium text-background lg:justify-around",
        {
          "sticky bg-foreground": isHome,
        }
      )}
    >
      <Link href={paths.home.getHref()}>
        <span className="font-bold text-3xl">TCG</span>
        <span className="font-semibold text-primary text-sm">Master</span>
      </Link>

      <div className="hidden items-center gap-4 lg:flex">
        {navigation.map((item) => (
          <NavbarItem
            key={item.href}
            href={item.href}
            isActive={pathname === item.href}
          >
            {item.name}
          </NavbarItem>
        ))}
      </div>

      <NavbarSearchBar />

      <div className="hidden gap-x-4 lg:flex">
        <Button variant="default">Login</Button>
        <Button className="text-foreground" variant="outline">
          Start selling
        </Button>
      </div>

      <div className="flex items-center justify-center lg:hidden">
        <Button
          variant="ghost"
          className="size-12 border-transparent"
          onClick={() => setIsSidebarOpen(true)}
        >
          <MenuIcon />
        </Button>
      </div>

      <NavbarSidebar
        items={navigation}
        open={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
      />
    </nav>
  );
};
