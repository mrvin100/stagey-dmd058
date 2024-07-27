"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChartNoAxesGantt,
  LogOutIcon,
  PlusSquareIcon,
  UserCheckIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
const Header = () => {
  const [navbar, setNavbar] = useState(true);

  const handleNavbar = () => {
    setNavbar(!navbar);
  };
  return (
    <header>
      <Tabs defaultValue="account" className="w-full">
        <div className="max-w-7xl w-full mx-auto grid justify-between grid-cols-2 items-center p-4">
          <div>
            <Avatar>
              <AvatarImage
                src="https://randomuser.me/api/portraits/men/54.jpg"
                alt="avatar image"
              />
              <AvatarFallback>YT</AvatarFallback>
            </Avatar>
          </div>
          <div className="text-right">
            <Button size={"icon"} variant={"outline"} onClick={handleNavbar}>
              <ChartNoAxesGantt className="h-6 w-6" />
            </Button>
          </div>
        </div>
        <Separator className="w-[90%] sm:w-full mx-auto" />
        <nav
          className={`${
            navbar ? "" : "hidden"
          } shadow-sm p-4 max-w-xl md:max-w-4xl lg:max-w-7xl rounded-b-sm md:mx-auto  mx-4`}
        >
          <Link
            href={"#"}
            className="text-gray-700 flex gap-2 py-2 px-4 hover:bg-gray-100"
          >
            <PlusSquareIcon />
            <span>Creer une annonce</span>
          </Link>
          <Link
            href={"#"}
            className="text-gray-700 flex gap-2 py-2 px-4 hover:bg-gray-100"
          >
            <UserCheckIcon /> <span>Utilisateur bloques</span>
          </Link>
          <Link
            href={"#"}
            className="text-gray-700 flex gap-2 py-2 px-4 hover:bg-gray-100"
          >
            <LogOutIcon /> <span>Se deconnecter</span>
          </Link>
          <Separator className="my-4" />
          <div className="text-center">
            <Button className="bg-blue-500 text-white">Se connecter</Button>
            <Separator className="my-4" />
            <div>
              <Button
                variant={"outline"}
                className="text-blue-500 border-blue-500 hover:bg-white"
              >
                S&apos;inscrire
              </Button>
            </div>
          </div>
        </nav>
      </Tabs>
    </header>
  );
};
export default Header;
