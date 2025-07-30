import CardsMovie from '@/componets/CardsMovie';
import { Box, Flex, Text, Spinner } from '@chakra-ui/react';
import useMovies from '@/hooks/useMovies.js'

function Home() {
  const { data: popularMovies, loading: loadingPopular } = useMovies('/movie/popular');
  const { data: topRatedMovies, loading: loadingTopRated } = useMovies('/movie/top_rated');
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

  return (
    <>
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
                img={`${imageBaseUrl}${movie.backdrop_path}`}
                id={movie.id}
              />
            ))}
          </Flex>
        )}
      </Box>

      <Text mt="16" fontSize="4xl" color="text">
        Películas Mejor Puntuadas
      </Text>
      <Box overflowX="auto" py={4} px={2}>
        {loadingTopRated ? (
          <Spinner />
        ) : (
          <Flex gap={4}>
            {topRatedMovies.map((movie) => (
              <CardsMovie
                key={movie.id}
                title={movie.title}
                img={`${imageBaseUrl}${movie.backdrop_path}`}
                id={movie.id}
              />
            ))}
          </Flex>
        )}
      </Box>
    </>
  );
}

export default Home;
