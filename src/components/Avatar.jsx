import { useState, useContext } from "react";
import ThemeContext from "../context/ThemeContext";

import PropTypes from "prop-types";
Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};


// import avatarImg from "../assets/avatar.png";

function Avatar({ name, email, imgUrl }) {
  const [isAvatarActive, setIsAvatarActive] = useState(false);
  const ctxValue = useContext(ThemeContext);
  console.log(ctxValue, "CONTEXT")
  const border = ctxValue === "dark" ? 'black' : '[#178f8d]'

  return (
    <div className="flex items-center gap-x-4 ml-auto">
      <span className="text-right">
        <p className="text-black font-bold">{name}</p>
        <p className="text-black">{email}</p>
      </span>
      <div
        className={`rounded-full border-[6px] hover:border-[6px] hover:border-${border} cursor-pointer transition-all ${isAvatarActive ? `border-${border}` : "border-[#fafbfd]"
          }`}
        onClick={() => setIsAvatarActive((prev) => !prev)}
      >
        <img src={imgUrl} alt="avatar" className="rounded-full w-16 h-16" />
      </div>
    </div>
  );
}

export default Avatar;
