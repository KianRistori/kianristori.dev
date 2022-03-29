import {useTheme} from "next-themes"
import {SunIcon, MoonIcon} from "@heroicons/react/solid"

const Header = () => {

  const {systemTheme, theme, setTheme} = useTheme ();
  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button className="w-10 h-10 dark:bg-slate-800 flex items-center rounded-md"  onClick={() => setTheme('light')}>
          <SunIcon className="w-6 h-6 flex-1"  />
        </button>
        
      )
    }

    if (currentTheme === "light") {
      return (
        <button className="w-10 h-10 bg-slate-200 flex items-center rounded-md"  onClick={() => setTheme('dark')}>
          <MoonIcon className="w-6 h-6 flex-1"/>
        </button>
      )
    }
  };
  return (
    <div className="flex justify-between my-8 items-center">
      <h1 className="font-medium text-xl"><a href="/">Kian Blog</a></h1>
      <div>
        <a
          href="https://twitter.com/MarkSShenouda"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          Twitter
        </a>
        <a
          href="https://github.com/KianRistori"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
      {renderThemeChanger()}
    </div>
  );
}

export default Header;
