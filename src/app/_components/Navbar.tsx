"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export default function Navbar() {
  return (
    <nav className=" flex items-center justify-start px-6 py-2 bg-white border-b">
      {/* Logo Section */}
      <div className="flex items-center space-x-1 pr-8">
        <Image
          src="/Chrome-Logo.png" 
          alt="Chrome logo"
          width={70}
          height={70}
        />
        <span className="text-2xl font-bold text-[#5f6368]">chrome</span>
      </div>

      {/* Navigation Menu */}
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList className="flex space-x-6">
          <NavigationMenuItem>
            <Link href="/" passHref legacyBehavior>
              <NavigationMenuLink className="font-bold text-[#5f6368] hover:text-blue-600">
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-bold text-[#5f6368] hover:text-blue-600">
              The Browser by Google
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-bold text-[#5f6368] hover:text-blue-600 flex items-center">
              Features <span className="ml-1">▼</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                <ListItem href="/feature-1" title="Overview">
                </ListItem>
                <ListItem href="/feature-2" title="Google Address bar">
                
                </ListItem>
                <ListItem href="/feature-3" title="Password Check">
                
                </ListItem>
                <ListItem href="/feature-4" title="Use acroos devices">
                  
                </ListItem>
                <ListItem href="/feature-5" title="Dark Mode">
                </ListItem>
                <ListItem href="/feature-6" title="Tabs">
          
                </ListItem>
                <ListItem href="/feature-7" title="Articles for you">
                  
                </ListItem>
                <ListItem href="/feature-8" title="Extensions">
                  
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-bold text-[#5f6368] hover:text-blue-600 flex items-center">
              Support <span className="ml-1">▼</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                <ListItem href="/support-1" title="Helpful tips for Chrome.">
                  
                </ListItem>
                <ListItem href="/support-2" title="Support.">
                  
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-md leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
