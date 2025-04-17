import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { Dialog } from "../../../../components/ui/dialog";
import { JobCreationSection } from "../JobCreationSection/JobCreationSection";

interface NavigationBarSectionProps {
  onJobCreated: (job: any) => void;
}

export const NavigationBarSection = ({ onJobCreated }: NavigationBarSectionProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { label: "Home", href: "#" },
    { label: "Find Jobs", href: "#" },
    { label: "Find Talents", href: "#" },
    { label: "About us", href: "#" },
    { label: "Testimonials", href: "#" },
  ];

  return (
    <div className="w-full max-w-[890px] mx-auto bg-white rounded-[122px] border border-solid border-[#fcfcfc] shadow-[0px_0px_20px_#7f7f7f26] flex flex-col md:flex-row items-center px-4 md:px-6 py-4 md:h-20 gap-4 md:gap-0">
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 md:gap-0">
        {/* Logo */}
        <div className="w-11 h-[45px] bg-[url(/clip-path-group.png)] bg-[100%_100%]" />

        {/* Navigation Menu */}
        <NavigationMenu className="mx-4">
          <NavigationMenuList className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  href={item.href}
                  className="inline-flex items-center justify-center px-6 py-2 rounded-[10px] font-bold text-dark-black text-base [font-family:'Satoshi_Variable-Bold',Helvetica] whitespace-nowrap"
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <Button 
                  onClick={() => setIsOpen(true)}
                  className="rounded-[30px] px-6 py-2 [background:linear-gradient(180deg,rgba(161,40,255,1)_0%,rgba(97,0,173,1)_100%)] text-white font-bold [font-family:'Satoshi_Variable-Bold',Helvetica]"
                >
                  Create Job
                </Button>
                <JobCreationSection onJobCreated={onJobCreated} setIsOpen={setIsOpen} />
              </Dialog>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};