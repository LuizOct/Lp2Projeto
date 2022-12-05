import React from "react";
import { StatusCard,StatusContent,StatusHeader,StatusHeaderFont,StatusRow } from "../../StyledComponents/StyledPokemon";

export default function PokeStats({stats}){
    const mapStatus = 
        stats &&
        stats.map((stat,key)=>{
            var text = stat.stat.name;
            text = text.toUpperCase();
           
            if(key%2 ===0){
                
                return <StatusContent line key={key}>
                   {text}: {stat.base_stat} 
                </StatusContent>
            }
            else{
                return <StatusContent key={key}>
                   {text}: {stat.base_stat} 
                </StatusContent>
            }
                
        })

    return(
        <StatusCard>
            <StatusHeader>
                <StatusHeaderFont>Status</StatusHeaderFont>
            </StatusHeader>
            <StatusRow>
                {mapStatus}
            </StatusRow>
        </StatusCard>
    );

}