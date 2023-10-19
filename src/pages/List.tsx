import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { CamisetaDto, listAll } from "../config/services/camiseta.service";
import { useEffect, useState } from "react";

function List() {
  const [expanded, setExpanded] = useState(false);
  const [camisetas, setCamisetas] = useState<CamisetaDto[]>([]);

  useEffect(() => {
    async function buscaDados() {
      const resposta = await listAll();

      setCamisetas(resposta);
    }

    buscaDados();
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleExpandClick = (index:any) => {
    console.log(expanded)
    setExpanded(!expanded)
  };

  return (
    <>
      <h1>lista das camisetas</h1>

      {camisetas.map((camiseta, index) => (
        <>
          <Card key={index} sx={{ maxWidth: 345 }}>
            <CardMedia
            expand={expanded}
              onClick={()=>handleExpandClick(index)}
              aria-expanded={expanded}
              aria-label="show more"
              component="img"
              height="194"
              image="src\assets\aquivaiacamiseta.png"
              alt="CardImage"
            />

            <CardHeader title={camiseta.nome} subheader={camiseta.modelo} />

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Detalhes:</Typography>
                <Typography paragraph>{camiseta.cor}</Typography>
                <Typography paragraph>{camiseta.estampaFrontal}</Typography>
                <Typography paragraph>{camiseta.estampaCostas}</Typography>
                <Typography>{camiseta.tags}</Typography>
              </CardContent>
            </Collapse>
          </Card>
        </>
      ))}
    </>
  );
}

export default List;
