import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Box, Grid } from '@material-ui/core';
import './Footer.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokenReducer';

function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state)=> state.tokens
      )

      var footerComponent;

      if(token != ""){ footerComponent =
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid  className='box1' alignItems="center" item xs={12}>
                    <Box>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className='textBox1'>Acompanhe meus projetos e me siga nas redes sociais</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.facebook.com/profile.php?id=100006441949121" target="_blank" rel="noopener noreferrer">
                                <FacebookIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                            <a href="https://www.instagram.com/sandy.trekking/?next=https%3A%2F%2Fwww.instagram.com%2Fdirect%2Finbox%2F%3F__coig_login%3D1" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                            <a href="hthttps://www.linkedin.com/in/sandymartinss/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box className='box1' style={{ height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "#fff" }} >© 2020 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://github.com/sandymartins" rel="noopener noreferrer">
                                <Typography variant="subtitle2" gutterBottom style={{ color: "#fff" }} align="center">Sandy Martins</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
}

return(
    <>
    
    {footerComponent}

    </>
)

}

export default Footer;