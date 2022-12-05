import React, { useState,useEffect } from "react";
import axios from "axios";

//components
import Header from "../Components/Header";
import ActionAreaCard from "../Components/ActionAreaCard";



//Styles
import { Body, HomeStyle, PokemonCard } from "../StyledComponents/StyledHome";
import { StyledFilter } from "../StyledComponents/StyledFilter";
import { Button, ButtonDivStyle } from "../StyledComponents/ButtonDiv";
import Loading from "../Components/Loading";


export default function Home () {
   const[pokemons, setPokemons] =useState();
   const[pagina,setPagina] =useState(1);
   const[limit,setLimit] = useState(51);
   const[loading,setLoading] = useState(true);
  

   useEffect(()=>{
        getPokemons();
   },[pagina,limit])

 
    
   const getPokemons = () =>{
     setLoading(true)   
     var endpoints= [];
     for (var i = pagina; i <limit ; i++){
      
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
     }

     axios.all(endpoints.map((endpoint) =>axios.get(endpoint)))
            .then((res)=>{
                setPokemons(res);
                setLoading(false)}
            );
   }

    
    const cardList = 
        pokemons &&
        pokemons.map((pokemon,key)=>{
            return <PokemonCard>
                        <ActionAreaCard key ={key} nome={pokemon.data.name} imagem={pokemon.data.sprites.front_default} types={pokemon.data.types} data={pokemon.data}/> 
                    </PokemonCard>
            
        })

    const searchPokemons = (name) =>{
         if(name ==="" || name === null){
            getPokemons();
         }   

        var search = []
        for (var i in pokemons){
            if(pokemons[i].data.name.includes(name)){
                search.push(pokemons[i])
            }
        }
        setPokemons(search);
    }
  
    const goToNextPage = (e)=>{
        setPagina(pagina + 50)
        setLimit(limit + 50)
        getPokemons();
    }

    const goToPreviousPage = (e)=>{
        if(pagina>50){
            setPagina(pagina-50)
            setLimit(limit-50)
            getPokemons();
        }
        
    }

    return(
        <HomeStyle>
            <Header/>
            
            <StyledFilter type="text" placeholder = "Pesquisar" onChange={(e)=>searchPokemons(e.target.value)}/>
            <ButtonDivStyle>
                <Button title="Previous" onClick={goToPreviousPage}>Previous</Button>
                <Button title="Next" onClick={goToNextPage}>Next</Button>
            </ButtonDivStyle>
            
            <Body>
                {loading && <Loading/>}
                {!loading && pokemons && pokemons.length>0 && cardList}
                {!loading && pokemons && pokemons.length===0 &&
                    <p>Não foi encontrado nenhum pokemon</p>
                }
            </Body>
            <ButtonDivStyle>
                <Button title="Previous" onClick={goToPreviousPage}>Previous</Button>
                <Button title="Next" onClick={goToNextPage}>Next</Button>
            </ButtonDivStyle>
        </HomeStyle>
    );

}