import CardsMovie from '@/componets/CardsMovie';
import Carousel from '@/componets/Carousel';
import useMovies, { type Movie } from '@/hooks/useMovies';
import { Box, Flex, Text, Spinner } from '@chakra-ui/react';

function Home() {
  const { data: popularMovies, loading: loadingPopular } = useMovies<Movie>('/movie/popular');
  const { data: topRatedMovies, loading: loadingTopRated } = useMovies<Movie>('/movie/top_rated');
  const { data: carouselMovies, loading: loadingCarousel } = useMovies<Movie>('/movie/now_playing');
  return (
    <>
    <Carousel data={carouselMovies} loading={loadingCarousel}/>
       <Flex
          direction="column"
          alignContent="center"
          maxW="8xl"
          width="full"
          px="4"
          mx="auto"
          flexGrow="1"
        >
  {/* carrusel de peliculas Populares */}
      <Text mt="16" fontSize="4xl" color="text">
        Películas Populares
      </Text>

      <Box overflowX="auto" py={4} px={2}>
        {loadingPopular ? (
          <Spinner />
        ) : (
          <Flex gap={4}>
            {popularMovies.map((movie) => (
              <CardsMovie
                key={movie.id}
                title={movie.title}
                img={movie.backdrop_path || ""}
                id={movie.id}
              />
            ))}
          </Flex>
        )}
      </Box>
 {/* carrusel de peliculas Mejor puntuadas */}
      <Text mt="16" fontSize="4xl" color="text">
        Películas Mejor Puntuadas
      </Text>
      <Box overflowX="auto" py={4} px={2} mb="16">
        {loadingTopRated ? (
          <Spinner />
        ) : (
          <Flex gap={4}>
            {topRatedMovies.map((movie) => (
              <CardsMovie
                key={movie.id}
                title={movie.title}
                img={movie.backdrop_path || ""}
                id={movie.id}
              />
            ))}
          </Flex>
        )}
      </Box>
      </Flex>
    </>
  );
}

export default Home;
