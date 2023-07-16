import React from "react";
import { useNavigate } from "react-router-dom";

import "./CardPokemon.css";

const CardPokemon = ({ pokemon }) => {
    const navigate = useNavigate();

    const getType = () => {
        const types = pokemon.types;

        let typeParam = "";
        let type1 = types[0].type.name;
        let color1 = pokemon.types[0].type.url;
        color1 = color1.replace("https://pokeapi.co/api/v2/type/", "");
        color1 = color1.replace("/", "");
        if (types.length > 1) {
            let type2 = types[1].type.name;
            let color2 = types[1].type.url;
            color2 = color2.replace("https://pokeapi.co/api/v2/type/", "");
            color2 = color2.replace("/", "");
            typeParam = `${type1}:${color1}|${type2}:${color2}`;
        } else {
            typeParam = `${type1}:${color1}`;
        }
        return typeParam;
    };

    const handleCardPokemonClick = () => {
        let typeParam = getType();
        navigate(
            `/${pokemon.name}/${pokemon.entryDetails}/${pokemon.id}/${typeParam}/`
        );
    };

    return (
        <ul
            key={pokemon.id}
            className="card-container"
            onClick={handleCardPokemonClick}
        >
            <li className="card-title">
                <span>#{pokemon.id}</span> <span>{pokemon.name}</span>
            </li>
            <li className="imgPokemon">
                <img src={pokemon.sprite} alt={pokemon.name} />
            </li>
        </ul>
    );
};

export default CardPokemon;
