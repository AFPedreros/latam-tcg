import Link from "next/link";
import { cn } from "@/utils";

type NavbarItemProps = {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
};

export const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  if (href === "/") return null;

  return (
    <Link
      href={href}
      className={cn("text-base capitalize", {
        "font-bold": isActive,
      })}
    >
      {children}
    </Link>
  );
};
