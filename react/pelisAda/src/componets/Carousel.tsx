import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css' 
import 'slick-carousel/slick/slick-theme.css' 
import { Box, Flex, Text, Button } from '@chakra-ui/react'
import { type Movie } from '@/hooks/useMovies'

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        background: 'rgba(0, 123, 255, 0.8)',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        right: '15px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 2,
        cursor: 'pointer',
        border: '2px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.target.style.background = 'rgba(0, 123, 255, 1)'
        e.target.style.transform = 'translateY(-50%) scale(1.1)'
      }}
      onMouseLeave={(e) => {
        e.target.style.background = 'rgba(0, 123, 255, 0.8)'
        e.target.style.transform = 'translateY(-50%) scale(1)'
      }}
      onClick={onClick}
    >
      <span style={{ 
        color: 'white', 
        fontSize: '16px', 
        fontWeight: 'bold',
        marginLeft: '2px' 
      }}>
        
      </span>
    </div>
  )
}

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        background: 'rgba(0, 123, 255, 0.8)',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        left: '15px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 2,
        cursor: 'pointer',
        border: '2px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.target.style.background = 'rgba(0, 123, 255, 1)'
        e.target.style.transform = 'translateY(-50%) scale(1.1)'
      }}
      onMouseLeave={(e) => {
        e.target.style.background = 'rgba(0, 123, 255, 0.8)'
        e.target.style.transform = 'translateY(-50%) scale(1)'
      }}
      onClick={onClick}
    >
      <span style={{ 
        color: 'white', 
        fontSize: '16px', 
        fontWeight: 'bold',
        marginRight: '2px' 
      }}>
        
      </span>
    </div>
  )
}

const CarouselItem = ({img, title, description}: {img: string, title: string, description: string}) => {
  return (
    <Box position="relative" height="60vh" width="100%">
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        backgroundImage={`url("https://image.tmdb.org/t/p/original/${img}")`}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="top"
      />
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="blackAlpha.600"
      />
      <Flex
        position="relative"
        direction="column"
        align="center"
        justify="center"
        height="100%"
        p={8}
        zIndex={1}
      >
        <Box textAlign="center" maxW="600px">
          <Text fontSize={{base: "2xl", md: "4xl"}} fontWeight="bold" color="white" mb={4}>
            {title}
          </Text>
          <Text fontSize={{base: "md", md: "lg"}} color="gray.200" mb={6} noOfLines={3}>
            {description}
          </Text>
          <Button colorScheme="blue" size="lg">
            Ver más...
          </Button>
        </Box>
      </Flex>
    </Box>
  )
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
}

const Carousel = ({ data, loading }: { data: Movie[]; loading: boolean }) => {
  if (!data.length && loading) {
    return (
      <Flex align="center" justify="center" height="60vh">
        <Text fontSize="xl" color="gray.500">Cargando...</Text>
      </Flex>
    )
  }

  return (
    <Box 
      position="relative" 
      height="60vh"
      sx={{
        '& .slick-slider': {
          height: '100%',
        },
        '& .slick-list': {
          height: '100%',
        },
        '& .slick-track': {
          height: '100%',
        },
        '& .slick-slide': {
          height: '60vh',
          '& > div': {
            height: '100%',
          },
        },
      }}
    >
      <Slider {...settings}>
        {data.map((movie, index) => (
          <CarouselItem 
            key={movie.id || index}
            img={movie.backdrop_path} 
            title={movie.title} 
            description={movie.overview} 
          />
        ))}
      </Slider>
    </Box>
  )
}

export default Carousel