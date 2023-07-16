import React from "react";
import CardPokemon from "./CardPokemon";
import "./CardsPokemon.css";
const CardsPokemon = ({ pokemons }) => {
    return (
        <div className="cards-pokemon-container">
            {pokemons.map((pokemon) => (
                <CardPokemon key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
    );
};

export default CardsPokemon;
