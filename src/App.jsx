// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import CardsPokemon from "./components/CardsPokemon";
import Header from "./components/Header";
import PokemonDetails from "./components/PokemonDetails";

import "./App.css";
import Loading from "./components/Loading";

function App() {
    const [pokemons, setPokemon] = useState([]);

    const fetchDex = async () => {
        let count = 152;
        let newPokemon = [];
        for (let i = 1; i < count; i++) {
            const url = "https://pokeapi.co/api/v2/pokemon/" + i;
            const { data } = await axios.get(url);

            const urlDetails = "https://pokeapi.co/api/v2/pokemon-species/" + i;
            const { data: dataDetails } = await axios.get(urlDetails);

            const { flavor_text: entryDetails } =
                dataDetails.flavor_text_entries[6]; //Ruby

            const { name, types, id } = data;
            const { front_default: sprite } = data.sprites.other.dream_world;

            newPokemon.push({
                id,
                name,
                types,
                sprite,
                entryDetails,
            });
        }
        setPokemon(newPokemon);
    };

    useEffect(() => {
        fetchDex();
    }, []);
    return (
        <Router>
            <div className="app-container">
                <Header />
                <Routes>
                    {/* <Route
                        path="/"
                        Component={() => <CardsPokemon pokemons={pokemons} />}
                    /> */}
                    <Route
                        path="/pokedex-react-vite/"
                        Component={() => {
                            if (pokemons.length === 151) {
                                return <CardsPokemon pokemons={pokemons} />;
                            } else {
                                return <Loading />;
                            }
                        }}
                    />
                </Routes>

                <Routes>
                    <Route
                        path="/pokedex-react-vite/:pokemonName/:pokemonDetails/:pokemonId/:pokemonTypes"
                        Component={PokemonDetails}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
