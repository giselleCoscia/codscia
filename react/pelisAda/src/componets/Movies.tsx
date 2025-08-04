import { useSearchParams } from 'react-router-dom'
import { Center, Grid, GridItem, Spinner, Text } from '@chakra-ui/react'
import useMovies from '@/hooks/useMovies'
import CardsMovie from '@/componets/CardsMovie'
import Pag from '@/componets/Pag'

interface Props {
  title: string
  endpoint: string
}

const Movies = ({ title, endpoint }: Props) => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('query') || ''
  const { data, loading, error, page, totalPages, setPage } = useMovies(
    endpoint,
    query
  )

  if (loading) {
    return (
      <Center mt={20}>
        <Spinner size="xl" color="blue.500" />
      </Center>
    )
  }

  if (error) {
    return (
      <Center mt={20}>
        <Text color="red.500">Hubo un error al cargar las películas.</Text>
      </Center>
    )
  }
  return (
    <>
      <Text marginTop="16" color="text" fontSize="4xl">
        {title}
      </Text>
      <Grid
        templateColumns={{
          base: '1fr',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        }}
        gap={6}
        p={4}
      >
        {data.map((movie) => (
          <GridItem key={movie.id}>
            <CardsMovie
              title={movie.title}
              img={movie.backdrop_path as string}
              id={movie.id}
            />
          </GridItem>
        ))}
      </Grid>
      <Pag page={page} totalPages={totalPages} setPage={setPage} />
    </>
  )
}
export default Movies
