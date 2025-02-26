import { Box } from '@mui/material';
import Tilt from 'react-parallax-tilt';

type DeckType = {
  pickUpCards: () => void;
};

export default function Deck({ pickUpCards }: DeckType) {
  return (
    <Box className="deck">
      <Tilt className="Tilt dcenter" >
        <Box className="Tilt-inner">
          <img
            alt="deck"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/06485517-936a-481b-b86d-1c02bad4305f/dg5ccx9-4a644d34-551b-4b43-8c85-18e349b1f4b5.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA2NDg1NTE3LTkzNmEtNDgxYi1iODZkLTFjMDJiYWQ0MzA1ZlwvZGc1Y2N4OS00YTY0NGQzNC01NTFiLTRiNDMtOGM4NS0xOGUzNDliMWY0YjUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bCkpbZavCsKKJPwjHsSmH_xFI0mTxK8NAkp5CttU7tY"
            className="deckgrow"
            onClick={pickUpCards}
          />
        </Box>
      </Tilt>
    </Box>
  );
}