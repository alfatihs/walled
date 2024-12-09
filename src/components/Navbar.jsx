import NavItems from "./NavItems";
import logo from "../assets/logo.png";

const MENU = [
  {
    title: "Dashboard",
    link: "#",
  },
  {
    title: "Transfer",
    link: "#",
  },
  {
    title: "Topup",
    link: "#",
  },
  {
    title: "Sign Out",
    link: "#",
  },
];

function Navbar() {
  return (
    <nav className="flex mx-auto w-screen justify-between items-center px-8 py-6 bg-white">
      <img src={logo} alt="walled logo" />
      <NavItems menu={MENU} />
    </nav>
  );
}

export default Navbar;
