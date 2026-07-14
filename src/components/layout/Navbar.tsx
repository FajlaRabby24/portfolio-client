"use client";

import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  className?: string;
  logo?: {
    url: string;
    alt: string;
    title: string;
    className?: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

const Navbar = ({
  logo = {
    url: "/",
    alt: "logo",
    title: "Fajla Rabby",
  },
  menu = [
    { title: "Home", url: "/ " },
    {
      title: "About me",
      url: "/about-me",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ],
}: Navbar1Props) => {
  return (
    <section className={cn("py-3 sticky top-0 z-50  bg-slate-950")}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop Menu */}
        <nav className="hidden items-center justify-between lg:flex">
          <div className="flex items-center  gap-6">
            {/* Logo */}
            <Link href={`/`} className=" gap-2">
              <span className="text-2xl font-bold text-white uppercase">
                Fajla Rabby
              </span>
            </Link>
          </div>
          <div className="flex items-center ">
            <NavigationMenu>
              <NavigationMenuList>
                {menu.map((item) => renderMenuItem(item))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden ">
          <div className="flex items-center justify-between">
            {/* Logo */}
            {/* Logo */}
            <Link href={`/`} className=" gap-2">
              <span className="text-2xl font-bold text-white uppercase">
                Fajla Rabby
              </span>
            </Link>
            <div className="space-x-2">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="size-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent className={cn("overflow-y-auto bg-slate-950")}>
                  <SheetHeader className="border-b">
                    <SheetTitle>
                      <Link href={`/`} className=" gap-2">
                        <span className="text-2xl font-bold text-white uppercase">
                          FR
                        </span>
                      </Link>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-6 p-2">
                    <Accordion
                      type="single"
                      collapsible
                      className="flex w-full flex-col gap-4"
                    >
                      {menu.map((item) => renderMobileMenuItem(item))}
                    </Accordion>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        asChild
        href={item.url}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-5 py-2 text-md font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        <Link href={item.url}> {item.title}</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  return (
    <Link key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </Link>
  );
};

export { Navbar };
