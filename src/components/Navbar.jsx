import NavItems from "./NavItems";
import logo from "../assets/logo.png";
import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";



const MENU = [
  {
    title: "Dashboard",
    link: "/dashboard",
  },
  {
    title: "Transfer",
    link: "/transfer",
  },
  {
    title: "Topup",
    link: "/topup",
  },
  {
    title: "Sign Out",
    link: "/",
  },
];

function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <nav className="flex mx-auto w-screen justify-between items-center px-8 py-6 bg-white">
      <img src={logo} alt="walled logo" />
      <div className='flex gap-x-8 px-5'>
        <NavItems menu={MENU} />
        {theme === 'dark' ?
          <IoSunny onClick={() => setTheme('light')} className='cursor-pointer self-center' /> :
          <IoMoon onClick={() => setTheme('dark')} className='cursor-pointer self-center' />}
        {/* <div onClick={() => theme === 'dark' ? setTheme('light') : setTheme('dark')}>Change!</div> */}
      </div>
    </nav>
  );
}

export default Navbar;
