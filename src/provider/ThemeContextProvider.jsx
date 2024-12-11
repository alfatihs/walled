import ThemeContext from "../context/ThemeContext";
import PropTypes from "prop-types";
import { useState } from "react";
ThemeContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState('light');
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}