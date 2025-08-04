import { Grid, GridItem, Text, Spinner, Center } from '@chakra-ui/react';
import CardsMovie from '@/componets/CardsMovie';
import Pag from '@/componets/Pag';
import useMovies from '@/hooks/useMovies';

function LastMovies() {
  const { data, loading, error, page, totalPages, setPage } = useMovies('/movie/upcoming');

  if (loading) {
    return (
      <Center mt={20}>
        <Spinner size="xl" color="blue.500" />
      </Center>
    );
  }

  if (error) {
    return (
      <Center mt={20}>
        <Text color="red.500">Hubo un error al cargar las películas.</Text>
      </Center>
    );
  }

  return (
    <>
      <Text marginTop="16" color="text" fontSize="4xl">
        Últimas Películas
      </Text>

      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
        gap={6}
        p={4}
      >
        {data.map((movie) => (
          <GridItem key={movie.id}>
            <CardsMovie
              title={movie.title}
              img={movie.backdrop_path}
              id={movie.id}
            />
          </GridItem>
        ))}
      </Grid>

      <Pag page={page}
        totalPages={totalPages}
        setPage={setPage} />
    </>
  );
}

export default LastMovies;
