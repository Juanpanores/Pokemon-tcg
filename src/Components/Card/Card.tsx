import { CardType } from "@/app/page.container";
import { Box, Typography } from "@mui/material";

type HandCardType = {
  card: CardType;
  onPickFighter?: (card: CardType) => void;
};

export default function Card({ card, onPickFighter }: HandCardType) {
  return (
    <Box className="card card--hover card__responsive" onClick={() => onPickFighter ? onPickFighter(card) : () => {}}>
      <Box component="img" src={card.image} alt={card.name} className="card__image" />
      <Box className="card__content">
        <Typography className="card__title">{card.name}</Typography>
        <Typography className="card__description">{card.description}</Typography>
        <Box className="card__stats">
          <Typography className="card__stats--attack">⚔️: {card.attack}</Typography>
          <Typography className="card__stats--defense">🛡️: {card.defense}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
