"use client"
import Link from 'next/link';
import { Switch } from '../ui/switch';
import { Button } from '../ui/button';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import { useContext, useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '../ui/navigation-menu';
import { ThemeContext } from '@/context/themeContext';

const Navber = () => {
  const pathName = usePathname();
  const { darkMode, toggleTheme }: any = useContext(ThemeContext)
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`py-4 shadow-md ${darkMode ? "bg-gray-900 text-white" : ""}`}>
      <nav className="max-w-7xl flex justify-between items-center mx-auto px-4 sm:px-6">
        <div className="text-xl font-bold">
          <Link href="/">Daily News</Link>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <Link 
            href="/news" 
            className={pathName === "/news" ? "text-red-500 font-bold" : ""}
          >
            News
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul>
                    <li>
                      <NavigationMenuLink>
                        <Link 
                          href="/" 
                          className={pathName === "/" ? "text-red-500 font-bold" : ""}
                        >
                          Web Development
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink>
                        <Link 
                          href="/" 
                          className={pathName === "/" ? "text-red-500 font-bold" : ""}
                        >
                          App Development
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink>
                        <Link 
                          href="/" 
                          className={pathName === "/" ? "text-red-500 font-bold" : ""}
                        >
                          SEO
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="lg:flex items-center hidden">
          <span className="mr-2">Dark Mode</span>
          <Switch checked={darkMode} onCheckedChange={toggleTheme} />
          <Button variant="default" className="ml-5">Login</Button>
        </div>

        <button onClick={toggleMenu} className="lg:hidden">
          {isOpen ? <IoClose size={26} /> : <GiHamburgerMenu size={26} />}
        </button>

        {isOpen && (
          <div className={`absolute right-0 top-10 mt-5 w-48 z-50 lg:hidden border shadow-md rounded-md ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
            <div className="m-5">
              <Link 
                href="/news" 
                className={pathName === "/news" ? "text-red-500 font-bold block hover:text-red-300" : "block hover:text-red-300"}
              >
                News
              </Link>

              <div className="flex items-center gap-2 mt-2">
                <span>Dark Mode</span>
                <Switch className="bg-gray-400 dark:bg-white" checked={darkMode} onCheckedChange={toggleTheme} />
              </div>

              <Button variant="default" className="mt-2 w-full">Login</Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navber;

