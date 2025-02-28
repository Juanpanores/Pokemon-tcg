import { CardType } from "@/app/page.container";
import { Box } from "@mui/material";
import Card from "../Card/Card";

type FieldType = {
  fighters: CardType[]
}

export default function Field({fighters}: FieldType) {
  return(
    <Box className="field" >
      <Box className="header">Battlefield</Box>
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
      <Box className="subHeader">Each pokemon attack eachother,</Box>
      <Box className="subHeader">
        only <span className="text-red-500 mx-1">ONE</span> can win!
      </Box>
    </Box>
  )
}