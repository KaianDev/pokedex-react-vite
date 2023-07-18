import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import PokemonTypeLegend from "./PokemonTypeLegend";
import Button from "./Button";

import "./PokemonDetails.css";
const PokemonDetails = () => {
    const { pokemonName, pokemonDetails, pokemonId, pokemonTypes } =
        useParams();

    let typesArray = [];
    let typeDetails = [];

    if (pokemonTypes.includes("|")) {
        typesArray = pokemonTypes.split("|");
        for (let i of typesArray) {
            let details = i.split(":");
            typeDetails.push({
                name: details[0],
                color: details[1],
            });
        }
    } else {
        typesArray.push(pokemonTypes);
        for (let i of typesArray) {
            let details = i.split(":");
            typeDetails.push({
                name: details[0],
                color: details[1],
            });
        }
    }

    const navigate = useNavigate();
    const handleButtonBackClick = () => {
        navigate("/pokedex-react-vite/");
    };

    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`;

    return (
        <div className="pokemon-details-container">
            <h2>{pokemonName}</h2>

            <div className="info-details-container">
                <img src={url} alt={pokemonName} />
                <div className="description-details-container">
                    <p>{pokemonDetails.replace("", " ")}</p>
                    {/* <div className="types-details-container">
                        {typesArray.map((type) => (
                            <PokemonTypeLegend type={type} />
                        ))}
                    </div> */}

                    <div className="types-details-container">
                        {typeDetails.map((type, index) => (
                            <PokemonTypeLegend
                                key={index}
                                typeName={type.name}
                                typeColor={type.color}
                            />
                        ))}
                    </div>

                    <Button onClick={handleButtonBackClick}>Voltar</Button>
                </div>
            </div>
        </div>
    );
};

export default PokemonDetails;
