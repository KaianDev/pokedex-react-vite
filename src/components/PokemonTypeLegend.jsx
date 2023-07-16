import React from 'react';
import './PokemonTypeLegend.css'
const PokemonTypeLegend = ({typeName, typeColor}) => {
    return ( <div className={`type-container color-${typeColor}`}>
        {typeName}
    </div> );
}

export default PokemonTypeLegend;