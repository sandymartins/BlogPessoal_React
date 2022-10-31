import React, { useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { Card, CardActions, CardContent, Button, Typography, Box, CardMedia, makeStyles } from '@material-ui/core';
import './ListaPostagem.css';
import { busca } from '../../../services/Service';
import { toast } from 'react-toastify';
import Postagem from '../../../models/Postagem';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokenReducer';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 350,
    objectFit: 'contain',
    width: 'auto',
  },
});



function ListaPostagem() {
  //HOOKS
  const[postagem, setPostagem] = useState<Postagem[]>([]) //Listando tema
  
  let navigate = useNavigate();

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state)=> state.tokens
  )

  const classes = useStyles();
  
  useEffect(()=>{
    if(token == ''){
      toast.error('Você precisa estar logado!',{
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
    });
        navigate("/login")
    }
  }, [token])



  async function getPostagem(){
    await busca("/postagens", setPostagem, {
      headers: {
        'Authorization': token
      }
    } )
  }

  useEffect(() =>{ //mapeando os temas para renderizar
    getPostagem()
  }, [postagem.length])

  return (
    <>
      {
        postagem.map(postagem => (
          <Box m={2}>
            <Card variant="outlined">
              <CardContent className='backgroundListaPost'>
                <Typography gutterBottom>
                  Postagens
                </Typography>
                <Typography variant="h5" component="h2">
                  {postagem.titulo}
                </Typography>
                <Typography variant="body2" component="p">
                  {postagem.texto}
                </Typography>
                <Typography variant="body2" component="p">
                  {postagem.tema?.descricao}
                </Typography>
              </CardContent>
              <CardMedia
              className={classes.media}
              image={postagem.foto}
            />
              <CardActions className='backgroundListaPost'>

                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/formularioPostagem/${postagem.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarPostagem/${postagem.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary">
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))
      }
    </>
  )
}



export default ListaPostagem;