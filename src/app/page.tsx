"use client";

import Deck from "@/Components/Deck/Deck";
import Field from "@/Components/Field/Feild";
import Graveyard from "@/Components/Graveyard/Graveyard";
import Hand from "@/Components/CardList/CardList";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { usePageContainer } from "./page.container";



export default function Home() {
  const {hand, deck, fighter, graveyard, onPickUpCard, onPickFighter} = usePageContainer()

  return (
    <Box className="bg-image">
      {deck.length===0 && hand.length===1 && fighter.length===0 ? 
      (
        <Box className="victory">¡VICTORY!</Box>
      ) : (
        
          <Box className="board__field">
            <Field fighters={fighter}/>
            <Box className="board__field-flex">
              <Deck pickUpCards={onPickUpCard}/>
              <Hand handCards={hand} onPickFighter={onPickFighter}/>
              <Graveyard graveyard={graveyard}/>
            </Box>
          </Box>
        
      )
    }
  </Box>
  )
}
