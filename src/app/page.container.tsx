import { useEffect, useState } from "react";

export type CardType ={
  name: string
  image: string
  description: []
  attack: number
  defense: number
}

const usePageContainer = () => {
  const [loading, setLoading] = useState(true)
  const [deck, setDeck] = useState<CardType[]>([])
  const [hand, setHand] = useState<CardType[]>([])
  const [fighter, setFighter] = useState<CardType[]>([])
  const [graveyard, setGraveyard] = useState<CardType[]>([])

  async function fetchPokemons() {
    try {
      setLoading(true);
  
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
  
      if (!response.ok) {
        console.error("Failed to fetch Pokémon data:", response.status, response.statusText);
        setLoading(false);
        return;
      }
  
      const data = await response.json();
  
      const pokemons = await Promise.all(
        data.results.map(async (pokemon: Awaited<ReturnType<typeof data.results>>) => {
          const res = await fetch(pokemon.url);
  
          if (!res.ok) {
            console.error(`Failed to fetch details for ${pokemon.name}:`, res.status, res.statusText);
            return null;
          }
  
          const details = await res.json();
          return {
            name: details.name.charAt(0).toUpperCase() + details.name.slice(1),
            image: details.sprites.front_default,
            description: details.types.map((t: Awaited<ReturnType<typeof details.types>>) => t.type.name).join(", "),
            attack: details.stats[1].base_stat,
            defense: details.stats[2].base_stat,
          };
        })
      );
  
      setDeck(pokemons.filter(Boolean).sort(() => 0.5 - Math.random()) as CardType[]);
  
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
    } finally {
      setLoading(false);
    }
  }

  const onPickFighter = (card: CardType) => { 
    if (fighter.length<2 ) {
    setFighter([...fighter, card]);
    setHand(hand.filter((e) => e !== card));
    }
  }

  const onPickUpCard = () => {
    if (deck.length>0) {
      let pickup=5-hand.length;
      if (pickup> deck.length){
        pickup= deck.length
      }

      setHand(hand.concat(deck.slice(0,pickup)))

      deck.splice(0,pickup) 
      setDeck(deck);
    }
  }

  useEffect(() => {
    fetchPokemons()
  },[])

  useEffect(() => {
    if (fighter.length===2) {
      setTimeout(() => {
        const health1 = fighter[0].defense - fighter[1].attack;
        const health2 = fighter[1].defense - fighter[0].attack;

        const deaths = fighter.filter((f, i) => (i === 0 ? health1 <= 0 : health2 <= 0));
        const survivors = fighter.filter((f, i) => (i === 0 ? health1 > 0 : health2 > 0));

        setHand([...hand, ...survivors]);

        if (deaths.length > 0) {
          setGraveyard(deaths);
        }

        setFighter([]);
      }, 1000); 
    }
  },[fighter])

  return{
    loading,
    hand,
    fighter,
    graveyard,
    deck,
    onPickUpCard,
    onPickFighter,
  }
}

export { usePageContainer };