import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const navigate = useNavigate();
    const handleHeaderClick = () => {
        navigate("/pokedex-react-vite");
    };

    return (
        <div className="header-container">
            <h1 onClick={handleHeaderClick}>Pokémon.dex</h1>
        </div>
    );
};
export default Header;
<h1>Pokemon.dex</h1>;
