import { CardType } from "@/app/page.container";
import Hand from "../CardList/CardList";
import { Box } from "@mui/material";
import Card from "../Card/Card";

type FieldType = {
  fighters: CardType[]
}

export default function Field({fighters}: FieldType) {
  return(
    <Box className="field" >
      <Box  className="field__battlefield">
        {!!fighters[0] ? 
          (<Card card={fighters[0]} />)  :
          (<Box className="field__empty-card card__responsive" />)
        }

        <Box component="img" alt="vs" src="https://pic.onlinewebfonts.com/thumbnails/icons_418591.svg?width=3&config=eyJwYXRoIjpbImZmMGUwZSIsImZmMGUwZSIsImZmMGUwZSJdfQ==" style={{height:'100px'}}/>
        
        {!!fighters[1] ? 
          (<Card card={fighters[1]} />) : 
          (<Box className="field__empty-card card__responsive" />)
        }
      </Box>
    </Box>
  )
}