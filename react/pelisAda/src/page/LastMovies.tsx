import CardsMovie from "@/componets/CardsMovie"
import data from "@/data"
import {  Flex, Grid, GridItem, Text } from '@chakra-ui/react'

function LastMovies() {
  return (
  <>
  <Text fontSize="4xl" >Ultimas Peliculas</Text>
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
  </>
  )
}

// function LastMovies() {
//   return (
//   <>
//   <Text fontSize="4xl" >Ultimas Peliculas</Text>
//   <Flex wrap="wrap" width="full"  justifyContent="space-between" gap="5">
//     {data.results.map((movie) => (
//         <CardsMovie  
//           title={movie.title}
//           img={movie.backdrop_path}
//           id={movie.id}
//         />
//     ))}
//   </Flex>
//   </>
//   )
// }

export default LastMovies