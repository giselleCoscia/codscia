import CardsMovie from "@/componets/CardsMovie"
import data from "@/data"
import { Grid, GridItem, Text } from '@chakra-ui/react'
import Pag from "@/componets/pag"

function Popular() {
  return (
   <>
  <Text marginTop="16" color="text" fontSize="4xl" >Populares</Text>
    <Grid
      templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
      gap={6}
      p={4}
    >
    {data.results.map((movie) => (
       <GridItem key={movie.id}>
        <CardsMovie  
          title={movie.title}
          img={movie.backdrop_path}
          id={movie.id}
        />
        </GridItem>
    ))}
  </Grid>
  <Pag  />
  </> 
  )
}

export default Popular