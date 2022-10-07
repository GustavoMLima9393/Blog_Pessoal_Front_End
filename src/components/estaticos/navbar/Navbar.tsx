import Menu from "@material-ui/core/Menu";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { AppBar, Toolbar, IconButton, Typography, Button } from "@material-ui/core";
import {Box} from '@mui/material';
import { Link } from "react-router-dom";
import './Navbar.css';
import { color } from "@mui/system";

function Navbar() {
  return (
    <>
      <AppBar position="static" style={{backgroundColor:'#0a0124'}}>
        <Toolbar variant="dense">
          <Box className="cursor">
            <Typography variant="h5" color="inherit">
              Blog do Gustavo
            </Typography>
          </Box>

          <Box display="flex" justifyContent="start">
            <Box mx={2} className="cursor">
              <Typography variant="h6" color="inherit">
                Home
              </Typography>
            </Box>
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Postagens
              </Typography>
            </Box>
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Temas
              </Typography>
            </Box>
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Cadastrar Tema
              </Typography>
            </Box>
            <Link to="/login" className="cursor, text-decorater-none" >
              <Box mx={1} style={{ cursor: "pointer", color: "white" }}>
                <Typography variant="h6" color="inherit">
                  Logout
                </Typography>
              </Box>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;