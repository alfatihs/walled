//reject proptype error
import PropTypes from "prop-types";
NavItems.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

import { NavLink } from "react-router";

function NavItems({ menu }) {
  return (
    <ul className="flex gap-x-8 text-black">
      {menu.map((item) => {
        return (
          <NavLink
            key={item.title}
            to={item.link}
            className={({ isActive }) => isActive ? "text-[#19918F] font-bold" : "text-black"}
          >
            {item.title}
          </NavLink>
        );
      })}
    </ul>
  );
}

export default NavItems;
