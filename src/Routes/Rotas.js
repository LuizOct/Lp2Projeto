import React from "react";
import {Route,Routes,BrowserRouter} from 'react-router-dom';


//Pages 
import Home from "../Pages/Home";
import Pokemon from "../Pages/Pokemon";
const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element= {<Home/>}/>
                <Route path="pokemon/"  element = {<Pokemon/>}/>

            </Routes>

        </BrowserRouter>
    )

}

export default Rotas;