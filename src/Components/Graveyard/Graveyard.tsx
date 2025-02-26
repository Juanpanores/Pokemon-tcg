import { CardType } from "@/app/page.container";
import { Box } from "@mui/material";
import Card from "../Card/Card";

type GraveyardType = {
  graveyard: CardType[]
}

export default function Graveyard({graveyard}: GraveyardType){
  return(
    <Box className="graveyard card__responsive" >
      {!!graveyard.length && <Card card={graveyard[graveyard.length-1]}/>}
    </Box>
  )
}