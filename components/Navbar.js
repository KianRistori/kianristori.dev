import {useTheme} from "next-themes"
import {SunIcon, MoonIcon} from "@heroicons/react/solid"
import { useState } from "react";
import { GrMenu } from "react-icons/gr";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
  
    const {systemTheme, theme, setTheme} = useTheme ();

    const renderThemeChanger = () => {
      const currentTheme = theme === "system" ? systemTheme : theme;
      
      if (currentTheme === "dark") {
        return (
            <button aria-label="sun-icon" className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={() => setTheme('light')}>
              <SunIcon className="w-6 h-auto"/>
            </button>
          
        )
      }
  
      if (currentTheme === "light") {
        return (
            <button aria-label="moon-icon" className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={() => setTheme('dark')}>
              <MoonIcon className="w-6 h-auto"/>
            </button>
        )
      }
    };
    return(
<nav className="rounded mt-10">
<div className="flex flex-wrap justify-between items-center">
<a href="/" className="flex items-center">
<span className="self-center text-xl font-medium whitespace-nowrap dark:text-white">Kian Ristori</span>
</a>
<button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
<span className="sr-only">Open main menu</span>
<GrMenu className="w-6 h-auto dark:text-white"/>
<GrClose className="hidden w-6 h-auto"/>
</button>
<div className="hidden w-full md:block md:w-auto" id="mobile-menu">
<ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
<li>
<a href="/blog" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blog</a>
</li>
<li>
<a href="/about" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
</li>
<li>
{renderThemeChanger()}
</li>
</ul>
</div>
</div>
</nav>
    )
}

export default Navbar;