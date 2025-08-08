import {
  Badge,
  Box,
  Button,
  Flex,
  Stack,
  Text,
  Spinner,
} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { useMovie, useTrailer } from '@/hooks/useMovies'
import { TrailerModal } from '@/componets/TrailerModal'
import { useState } from 'react'

function Detail() {
  const { id } = useParams()
  const { movie, loading, error } = useMovie(id as string)
  const { trailer } = useTrailer(id as string)

  const [isOpen, setIsOpen] = useState(false)
  if (loading) {
    return (
      <Flex justify="center" align="center" minH="100vh">
        <Spinner size="xl" />
      </Flex>
    )
  }

  if (error) {
    return (
      <Flex justify="center" align="center" minH="100vh">
        <Text color="red.500">Error al cargar la película: {error}</Text>
      </Flex>
    )
  }

  if (!movie) return null //

  return (
    <>
      <Box minHeight="100vh" bg="gray.100" position="relative">
        {/* Fondo con imagen de backdrop */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bgImage={`url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`}
          backgroundSize="cover"
          backgroundPosition="center"
          opacity="0.7"
          zIndex="0"
        />

        {/* Overlay oscuro */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.9))"
          zIndex="1"
        />

        {/* Contenido principal */}
        <Box position="relative" zIndex="2">
          {/* Header */}
          <Flex
            align="center"
            justify="space-between"
            p="6"
            mx="auto"
            maxW="8xl"
            padding="4"
            backdropFilter="blur(10px)"
          >
            <Text
              color="white"
              fontSize={{ base: '2xl', md: '4xl' }}
              fontWeight="bold"
            >
              {movie.title}
            </Text>
            <Button
              onClick={() => setIsOpen(true)}
              colorScheme="blue"
              size="lg"
              _hover={{ transform: 'scale(1.05)' }}
              transition="all 0.2s"
            >
              Ver Trailer
            </Button>
          </Flex>

          {/* Contenido de la película */}
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            p="6"
            gap="8"
            maxW="1400px"
            mx="auto"
          >
            {/* Poster */}
            <Box mx="auto" maxW="8xl" flexShrink="0">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                style={{
                  width: '300px',
                  height: '450px',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                }}
              />
            </Box>

            {/* Información */}
            <Box flex="1" color="white">
              {/* Tagline */}
              <Text fontSize="lg" fontStyle="italic" color="gray.300" mb="4">
                "{movie.tagline}"
              </Text>

              {/* Overview */}
              <Text fontSize="md" lineHeight="1.6" mb="6" color="gray.100">
                {movie.overview}
              </Text>

              {/* Géneros */}
              <Box mb="6">
                <Text fontSize="xl" fontWeight="semibold" mb="3" color="white">
                  Géneros:
                </Text>
                <Stack direction="row" wrap="wrap" spacing="2">
                  {movie.genres.map((genre) => (
                    <Badge
                      key={genre.id}
                      bg="#43639E"
                      variant="solid"
                      px="3"
                      py="1"
                      borderRadius="full"
                      fontSize="sm"
                    >
                      {genre.name}
                    </Badge>
                  ))}
                </Stack>
              </Box>

              {/* Información adicional */}
              <Stack spacing="2" color="gray.300">
                <Text>
                  <Text as="span" fontWeight="semibold" color="white">
                    Fecha de estreno:
                  </Text>{' '}
                  {new Date(movie.release_date).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </Text>
                <Text>
                  <Text as="span" fontWeight="semibold" color="white">
                    Duración:
                  </Text>{' '}
                  {movie.runtime} minutos
                </Text>
                <Text>
                  <Text as="span" fontWeight="semibold" color="white">
                    Calificación:
                  </Text>{' '}
                  ⭐ {movie.vote_average.toFixed(1)}/10 ({movie.vote_count}{' '}
                  votos)
                </Text>
              </Stack>
            </Box>
          </Flex>
        </Box>
      </Box>
      {trailer?.key && (
        <TrailerModal
          open={isOpen}
          onOpenChange={(e) => setIsOpen(e.open)}
          title={movie.title}
          trailerUrl={`https://youtube.com/embed/${trailer.key}`}
          children={undefined}
        />
      )}
    </>
  )
}

export default Detail
