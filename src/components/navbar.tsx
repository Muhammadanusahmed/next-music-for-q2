"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem} from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link
          href={"/"}
          className="flex space-x-2 pr-5"
          onClick={() => setActive(null)}
        >
          Home
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">Courses</HoveredLink>
            <HoveredLink href="/interface-design">about</HoveredLink>
            <HoveredLink href="/seo">instructor</HoveredLink>
            <HoveredLink href="/branding">details</HoveredLink>
          </div>
        </MenuItem>
        <Link
          href={"/contact"}
          className="flex space-x-2 pl-5"
          onClick={() => setActive(null)}
        >
          Contact
        </Link>
      </Menu>
    </div>
  );
}
