import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { useState } from "react";
import { create } from "../config/services/camiseta.service";
import "../styled.css";
import styled from "styled-components";

const ChangeColorStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.backgroundColor};
  mix-blend-mode: multiply;
`;

function Home() {
  const [backgroundColor, setBackgroundColor] = useState("#fffffff");
  const [camiseta, setCamiseta] = useState({
    nome: "",
    cor: "",
    modelo: "",
    estampaCostas: "",
    estampaFrontal: "",
    tags: "",
  });

  const handleSubmit = async () => {
    const resposta = await create(camiseta);
    console.log(resposta);
  };

  return (
    <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center">
      <h1 style={{ fontFamily: "sans-serif" }}>Crie sua camiseta!</h1>
      <Box component="form" sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }} noValidate autoComplete="off">
        <Box display="flex" alignItems="center" justifyContent="center">
          <Box className="tshirt-container">
            <ChangeColorStyled backgroundColor={backgroundColor} className="color-overlay"></ChangeColorStyled>
            <div className="estampa-frente">
              <img src={camiseta.estampaFrontal} alt="" />
            </div>
          </Box>
          <Box className="tshirt-container costas">
            <ChangeColorStyled backgroundColor={backgroundColor} className="color-overlay"></ChangeColorStyled>
            <div className="estampa-costas">
              <img src={camiseta.estampaCostas} alt="" />
            </div>
          </Box>
        </Box>
        <form>
          <Box display="flex" flexDirection="column" alignItems="center">
            <TextField onChange={(e) => setCamiseta({ ...camiseta, nome: e.target.value })} id="nome" label="Nome" variant="outlined" />
            <TextField
              onChange={(e) => {
                setCamiseta({ ...camiseta, cor: e.target.value });
                setBackgroundColor(e.target.value);
              }}
              id="cor"
              label="Cor"
              variant="outlined"
              type="color"
            />
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <TextField onChange={(e) => setCamiseta({ ...camiseta, modelo: e.target.value })} id="modelo" label="Modelo" variant="outlined" />
            <TextField onChange={(e) => setCamiseta({ ...camiseta, estampaFrontal: e.target.value })} id="estampaFrontal" label="Estampa frontal" variant="outlined" />
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <TextField onChange={(e) => setCamiseta({ ...camiseta, estampaCostas: e.target.value })} id="estampaCostas" label="Estampa costas" variant="outlined" />
            <TextField onChange={(e) => setCamiseta({ ...camiseta, tags: e.target.value })} id="tags" label="Tags" variant="outlined" />
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center" paddingTop="1rem">
            <Button onClick={handleSubmit} variant="contained" endIcon={<AutoAwesomeIcon />}>
              Criar Camiseta
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default Home;
