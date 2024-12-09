import { useState } from "react";

function NavItems({ menu }) {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <ul className="flex gap-x-8 text-black">
      {menu.map((item) => {
        return (
          <a
            key={item.title}
            href={item.link}
            className={`${
              activeTab === item.title
                ? "text-[#19918F] font-bold"
                : "text-black"
            }`}
            onClick={() => setActiveTab(item.title)}
          >
            {item.title}
          </a>
        );
      })}
    </ul>
  );
}

export default NavItems;
