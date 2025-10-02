"use client";

import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { paths } from "@/config/paths";
import { Button } from "./button";
import { NavbarItem } from "./navbar-item";
import { NavbarSidebar } from "./navbar-sidebar";

export const Navbar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const navigation = [
    { name: "Sets", href: paths.public.sets.getHref() },
    { name: "Cartas", href: paths.public.cards.getHref() },
    { name: "Nosotros", href: paths.public.about.getHref() },
  ];

  return (
    <nav className="flex h-20 items-center justify-between border-b bg-white px-6 text-center font-medium">
      <Link href="/">
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

      <div className="hidden gap-x-4 lg:flex">
        <Button variant="default">Login</Button>
        <Button variant="outline">Start selling</Button>
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
