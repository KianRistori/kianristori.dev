import {useTheme} from "next-themes"
import {SunIcon, MoonIcon} from "@heroicons/react/solid"
import { useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
  
    const {systemTheme, theme, setTheme} = useTheme ();

    const router = useRouter();

    const renderActive = () => {
      if (router.pathname==="/") {
        return(
         <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
           <li>
             <a href="/" class="block py-2 pr-4 pl-3 text-black rounded md:bg-transparent md:p-0 dark:text-white">Home</a>
           </li>
           <li>
             <a href="/blog" class="block py-2 pr-4 pl-3 text-gray-700 hover:text-gray-800 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0  md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blog</a>
           </li>
           <li>
             <a href="/projects" class="block py-2 pr-4 pl-3 text-gray-700 hover:text-gray-800 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projects</a>
           </li>
           <li>
             <a href="/about" class="block py-2 pr-4 pl-3 text-gray-700 hover:text-gray-800 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
           </li>
         </ul>
        )
      }
      if (router.pathname==="/blog") {
        return(
         <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
           <li>
             <a href="/" class="block py-2 pr-4 pl-3 text-gray-700 hover:text-gray-800 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
           </li>
           <li>
             <a href="/blog" class="block py-2 pr-4 pl-3 text-black rounded md:bg-transparent md:p-0 dark:text-white">Blog</a>
           </li>
           <li>
             <a href="/projects" class="block py-2 pr-4 pl-3 text-gray-700 hover:text-gray-800 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projects</a>
           </li>
           <li>
             <a href="/about" class="block py-2 pr-4 pl-3 text-gray-700 hover:text-gray-800 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
           </li>
         </ul>
        )
      }
      if (router.pathname==="/projects") {
        return(
         <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
           <li>
             <a href="/" class="block py-2 pr-4 pl-3 text-gray-700 hover:text-gray-800 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
           </li>
           <li>
             <a href="/blog" class="block py-2 pr-4 pl-3 text-gray-700 hover:text-gray-800 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blog</a>
           </li>
           <li>
             <a href="/projects" class="block py-2 pr-4 pl-3 text-black rounded md:bg-transparent md:p-0 dark:text-white">Projects</a>
           </li>
           <li>
             <a href="/about" class="block py-2 pr-4 pl-3 text-gray-700 hover:text-gray-800 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
           </li>
         </ul>
        )
      }
      if (router.pathname==="/about") {
        return(
         <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
           <li>
             <a href="/" class="block py-2 pr-4 pl-3 text-gray-700 hover:text-gray-800 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
           </li>
           <li>
             <a href="/blog" class="block py-2 pr-4 pl-3 text-gray-700 hover:text-gray-800 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blog</a>
           </li>
           <li>
             <a href="/projects" class="block py-2 pr-4 pl-3 text-gray-700 hover:text-gray-800 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projects</a>
           </li>
           <li>
             <a href="/about" class="block py-2 pr-4 pl-3 text-black rounded md:bg-transparent md:p-0 dark:text-white">About</a>
           </li>
         </ul>
        )
      }
      return(
        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li>
            <a href="/" class="block py-2 pr-4 pl-3 text-gray-700 hover:text-gray-800 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0  md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
          </li>
          <li>
            <a href="/blog" class="block py-2 pr-4 pl-3 text-gray-700 hover:text-gray-800 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0  md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blog</a>
          </li>
          <li>
             <a href="/projects" class="block py-2 pr-4 pl-3 text-gray-700 hover:text-gray-800 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projects</a>
           </li>
          <li>
            <a href="/about" class="block py-2 pr-4 pl-3 text-gray-700 hover:text-gray-800 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
          </li>
        </ul>
      )
    }

    const renderThemeChanger = () => {
      const currentTheme = theme === "system" ? systemTheme : theme;
      
      if (currentTheme === "dark") {
        return (
            <button aria-label="sun-icon" className="block py-2 pr-4 pl-3 text-gray-700 md:border-0 md:p-0 dark:text-gray-400" onClick={() => setTheme('light')}>
              <SunIcon className="w-6 h-auto hover:text-gray-200"/>
            </button>
          
        )
      }
  
      if (currentTheme === "light") {
        return (
            <button aria-label="moon-icon" className="block py-2 pr-4 pl-3 text-gray-700 md:border-0 md:p-0 dark:text-gray-400" onClick={() => setTheme('dark')}>
              <MoonIcon className="w-6 h-auto hover:text-gray-900"/>
            </button>
        )
      }
    };
    return(

<nav class="mt-10">
<div class="flex flex-wrap justify-between items-center mx-auto">
<a href="/" class="flex items-center">
<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Kian Ristori</span>
</a>
<div class="flex md:order-2">
{renderThemeChanger()}
<button data-collapse-toggle="mobile-menu-4" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
<span class="sr-only">Open main menu</span>
<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
<svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</button>
</div>
<div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
{renderActive()}
</div>
</div>
</nav>

    )
}

export default Navbar;