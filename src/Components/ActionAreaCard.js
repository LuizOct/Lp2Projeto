//materialUI

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ActionAreaCard({nome,imagem,types,data}) {
  const navigate = useNavigate()

     const goToPokeInfo = () =>{
    navigate("/pokemon", {state:{
      data:{data},
    }
      
    });
  }

  const typeHandler = () =>{
    if(types[1]){
      return types[0].type.name + " / " + types[1].type.name
    }
    else{
      return types[0].type.name
    }
  }

  return (
    <Card sx={{ width: 350 }} onClick={goToPokeInfo}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image={imagem}
          alt="imagem do pokémon"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {nome}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {typeHandler()}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
