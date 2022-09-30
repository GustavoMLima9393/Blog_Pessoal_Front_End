import React from "react";
import {Button, Paper} from "@material-ui/core";
import {Box} from "@mui/material";
import "./Home.css";

function Home(){
    return(
        <>
            <Paper>
                <Box p={2}>
                    <Box display="flex" justifyContent="center">
                        <h1>Título</h1>
                    </Box>
                        <img src="https://neilpatel.com/wp-content/uploads/2017/07/corporatepersonalblog.jpg" alt="Imagem provisória" style={{width: "100%", height: "100%"}}/>
                        <Box display="flex" justifyContent="center" p={2}>
                            <Button variant="contained" color="primary">Botão 1</Button>
                            <Button variant="contained" color="secondary">Botão 2</Button>
                        </Box>
                </Box>
            </Paper>
        </>
    );
}

export default Home;