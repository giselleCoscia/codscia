import CardsMovie from '@/componets/CardsMovie'
import data from '@/data'
import { Box, Flex, Text } from '@chakra-ui/react'


function Home() {
  return (

    
    <>
     
     <Text  margin="4" textStyle="2xl" color="text">Peliculas Populares </Text> 
      <Box overflowX="auto" py={4} px={2}>
        <Flex gap={4} >
          {data.results.map((movie) => (
                <CardsMovie
                title={movie.title}
                img={movie.backdrop_path}
                id={movie.id}
              />
            
          ))}
        </Flex>
      </Box>
      <Text margin="4" textStyle="2xl" color="text" > Peliculas Mejor Puntuadas</Text>
        <Box overflowX="auto"  py={4} px={2}>
        <Flex gap={4} >
          {data.results.map((movie) => (
            <CardsMovie
              title={movie.title}
              img={movie.backdrop_path}
              id={movie.id}
            />
          ))}
        </Flex>
      </Box>
    </>
  )
}

export default Home
