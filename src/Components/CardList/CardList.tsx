import { CardType } from "@/app/page.container";
import Card from "../Card/Card";
import { Box } from "@mui/material";

export type HandType = {
  handCards: CardType[]
  onPickFighter?: (card: CardType) => void
}


export default function CardList ({handCards, onPickFighter}: HandType){
  return(
    <Box className="hand">
      {handCards.map((card, key) => (
        <Card
          key={key}
          card={card}
          onPickFighter={onPickFighter? onPickFighter: ()=>{}}
        />
      ))}
    </Box>
  )
}