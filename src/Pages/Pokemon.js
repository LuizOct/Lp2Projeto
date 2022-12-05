import React from "react";
import { useLocation } from "react-router-dom";
import { PokemonBody, PokemonStyle } from "../StyledComponents/StyledPokemon";

//components
import PokeHeader from "../Components/PokemonComponents/PokeHeader";
import PokeSpirte from "../Components/PokemonComponents/PokeSprite";
import PokeStats from "../Components/PokemonComponents/PokeStats";


export default function Pokemon(){
    
    const location = useLocation();
    const {data} = location.state
    

    //Functions
    const getImg = () =>{
        if(data.data.sprites.versions['generation-v']['black-white'].animated.front_default){
           return  data.data.sprites.versions['generation-v']['black-white'].animated.front_default
            
        }
        else{
            return data.data.sprites.front_default
        }
    } 

   


    return(
      <PokemonStyle>
        <PokeHeader name={data.data.name}/>
        <PokemonBody>
            <PokeSpirte imagem ={getImg()}/>
            <PokeStats stats={data.data.stats}/>    
        </PokemonBody>
        
      </PokemonStyle>
    );

}   