import styled from "styled-components";

export const  PokemonBody = styled.div`
    display: flex;
    flex: 1;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
    
    
`;

export const PokemonStyle = styled.div`
    background-color: #F58498;
    width: 100%;
    height: 100vh;
    align-items:center;
    text-align:center;
`;

export const PokemonHeader = styled.div`
    width:100%;
    height:100px;
    background-color:#A83445;
    border:2px;
    padding-top: 20px;
    margin-bottom: 20px;

`;

export const PokemonHeaderFont = styled.h1`
    font-size: 50px;
    font-weight: bold;
    color: #fff;
`;

export const PokeImg = styled.img`
    margin-left: 20%;
    height:300px;
`;

export const StatusCard = styled.div`
    justify-content:flex-end;
    align-content: flex-start;
    flex-direction: row;
    width:400px;
    background-color:#A5FFB5;
    border-radius: 20px;
    margin-right: 20%;
    border-color:black;
    
    
`;

export const StatusHeader = styled.div`
    height: 50px;
    width: 400px;
    background-color:#20A83B;
    align-items: flex-start;
    text-align: center;
    
    justify-content: center;
`;

export const StatusHeaderFont = styled.h1`
    font-size: 35px;
    font-weight: bold;
    color: #fff;
`;

export const StatusRow = styled.div`
    width: 100%;
    height:25px;

`;

export const StatusContent = styled.p`
    background-color: ${props => props.line ? "#53F574" : "#7CF59C"};
    font-size: 15px;
    font-weight: bold;
    color: #fff;
`;

export const InfoCard = styled.div`
    display:flex;
    flex:1;
    margin-left: 20%;
`;