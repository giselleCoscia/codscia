import { Badge, Box, Button, Flex, Stack, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const data = {
  adult: false,
  backdrop_path: '/8J6UlIFcU7eZfq9iCLbgc8Auklg.jpg',
  belongs_to_collection: {
    id: 1458864,
    name: 'How to Train Your Dragon (Live-Action) Collection',
    poster_path: null,
    backdrop_path: '/eKpWn8DwS6xpAKs4eLb4PmrXnhk.jpg',
  },
  budget: 150000000,
  genres: [
    {
      id: 14,
      name: 'Fantasía',
    },
    {
      id: 10751,
      name: 'Familia',
    },
    {
      id: 28,
      name: 'Acción',
    },
  ],
  homepage: 'https://www.universalpictures.es/micro/entrenador-de-dragones',
  id: 1087192,
  imdb_id: 'tt26743210',
  origin_country: ['US'],
  original_language: 'en',
  original_title: 'How to Train Your Dragon',
  overview:
    'En la escarpada isla de Mema, donde vikingos y dragones han sido enemigos acérrimos durante generaciones, Hipo se desmarca desafiando siglos de tradición cuando entabla amistad con Desdentao, un temido dragón Furia Nocturna. Su insólito vínculo revela la verdadera naturaleza de los dragones y desafía los cimientos de la sociedad vikinga.',
  popularity: 775.857,
  poster_path: '/9Zr7ZyiMpgMhhxJQi1tQJp9LGho.jpg',
  production_companies: [
    {
      id: 521,
      logo_path: '/kP7t6RwGz2AvvTkvnI1uteEwHet.png',
      name: 'DreamWorks Animation',
      origin_country: 'US',
    },
    {
      id: 2527,
      logo_path: '/mNSqvPrlkAcdQlEZ3Ttmx75Z8Xw.png',
      name: 'Marc Platt Productions',
      origin_country: 'US',
    },
  ],
  production_countries: [
    {
      iso_3166_1: 'US',
      name: 'United States of America',
    },
  ],
  release_date: '2025-06-06',
  revenue: 605900000,
  runtime: 125,
  spoken_languages: [
    {
      english_name: 'English',
      iso_639_1: 'en',
      name: 'English',
    },
    {
      english_name: 'Russian',
      iso_639_1: 'ru',
      name: 'Pусский',
    },
  ],
  status: 'Released',
  tagline: 'La leyenda es real.',
  title: 'Cómo entrenar a tu dragón',
  video: false,
  vote_average: 8.067,
  vote_count: 1265,
}

function Detail() {
  const navigate = useNavigate()

  return (
    <Box 
      minHeight="100vh"
      bg="gray.100"
      position="relative"
    >
      {/* Fondo con imagen de backdrop */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgImage={`url(https://image.tmdb.org/t/p/original${data.backdrop_path})`}
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
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="bold"
            
          >
            {data.title}
          </Text>
          <Button 
            onClick={() => navigate('/')} 
            colorScheme="blue"
            size="lg"
            _hover={{ transform: "scale(1.05)" }}
            transition="all 0.2s"
          >
            Ver Trailer
          </Button>
        </Flex>

        {/* Contenido de la película */}
        <Flex
          direction={{ base: "column", lg: "row" }}
          p="6"
          gap="8"
          maxW="1400px"
          mx="auto"
        >
          {/* Poster */}
          <Box  mx="auto"
          maxW="8xl"
           flexShrink="0">
            <img
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              alt={data.title}
              style={{
                width: "300px",
                height: "450px",
                objectFit: "cover",
                borderRadius: "12px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
              }}
            />
          </Box>

          {/* Información */}
          <Box flex="1" color="white">
            {/* Tagline */}
            <Text 
              fontSize="lg" 
              fontStyle="italic" 
              color="gray.300" 
              mb="4"
            >
              "{data.tagline}"
            </Text>

            {/* Overview */}
            <Text 
              fontSize="md" 
              lineHeight="1.6" 
              mb="6"
              color="gray.100"
            >
              {data.overview}
            </Text>

            {/* Géneros */}
            <Box mb="6">
              <Text 
                fontSize="xl" 
                fontWeight="semibold" 
                mb="3"
                color="white"
              >
                Géneros:
              </Text>
              <Stack direction="row" wrap="wrap" spacing="2">
                {data.genres.map((genre) => (
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
                {new Date(data.release_date).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </Text>
              <Text>
                <Text as="span" fontWeight="semibold" color="white">
                  Duración:
                </Text>{' '}
                {data.runtime} minutos
              </Text>
              <Text>
                <Text as="span" fontWeight="semibold" color="white">
                  Calificación:
                </Text>{' '}
                ⭐ {data.vote_average.toFixed(1)}/10 ({data.vote_count} votos)
              </Text>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default Detail