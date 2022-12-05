import React from "react";
import { PokemonHeader, PokemonHeaderFont } from "../../StyledComponents/StyledPokemon";

export default function PokeHeader({name}){
    return(
        <PokemonHeader>
            <PokemonHeaderFont>
                {name}
            </PokemonHeaderFont>
        </PokemonHeader>
    );
}
