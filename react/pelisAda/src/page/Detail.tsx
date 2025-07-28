import { Box, Button, Flex} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

const data =  {
    "adult": false,
    "backdrop_path": "/8J6UlIFcU7eZfq9iCLbgc8Auklg.jpg",
    "belongs_to_collection": {
        "id": 1458864,
        "name": "How to Train Your Dragon (Live-Action) Collection",
        "poster_path": null,
        "backdrop_path": "/eKpWn8DwS6xpAKs4eLb4PmrXnhk.jpg"
    },
    "budget": 150000000,
    "genres": [
        {
            "id": 14,
            "name": "Fantasía"
        },
        {
            "id": 10751,
            "name": "Familia"
        },
        {
            "id": 28,
            "name": "Acción"
        }
    ],
    "homepage": "https://www.universalpictures.es/micro/entrenador-de-dragones",
    "id": 1087192,
    "imdb_id": "tt26743210",
    "origin_country": [
        "US"
    ],
    "original_language": "en",
    "original_title": "How to Train Your Dragon",
    "overview": "En la escarpada isla de Mema, donde vikingos y dragones han sido enemigos acérrimos durante generaciones, Hipo se desmarca desafiando siglos de tradición cuando entabla amistad con Desdentao, un temido dragón Furia Nocturna. Su insólito vínculo revela la verdadera naturaleza de los dragones y desafía los cimientos de la sociedad vikinga.",
    "popularity": 775.857,
    "poster_path": "/9Zr7ZyiMpgMhhxJQi1tQJp9LGho.jpg",
    "production_companies": [
        {
            "id": 521,
            "logo_path": "/kP7t6RwGz2AvvTkvnI1uteEwHet.png",
            "name": "DreamWorks Animation",
            "origin_country": "US"
        },
        {
            "id": 2527,
            "logo_path": "/mNSqvPrlkAcdQlEZ3Ttmx75Z8Xw.png",
            "name": "Marc Platt Productions",
            "origin_country": "US"
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": "US",
            "name": "United States of America"
        }
    ],
    "release_date": "2025-06-06",
    "revenue": 605900000,
    "runtime": 125,
    "spoken_languages": [
        {
            "english_name": "English",
            "iso_639_1": "en",
            "name": "English"
        },
        {
            "english_name": "Russian",
            "iso_639_1": "ru",
            "name": "Pусский"
        }
    ],
    "status": "Released",
    "tagline": "La leyenda es real.",
    "title": "Cómo entrenar a tu dragón",
    "video": false,
    "vote_average": 8.067,
    "vote_count": 1265
}

function Detail( ) {
 const navigate= useNavigate()

  return (
<>
<Flex 
      display="flex"
      align="center"
      justifyContent="space-between" 
      padding="5"
        >
   <Box  fontFamily="titulo" color="red">{data.title}</Box>
    <Button onClick={()=> navigate(`{}`)} bg="terceary" size="lg">Ver Trailer</Button>
</Flex>
<Flex>
  <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="" />
  <Box color="red">
    <div>
     { data.overview}
    </div>
    <div> Generos: {data.genres.map((genres)=>(<Box key={genres.id} >
      {genres.name}
    </Box>))}</div>
  </Box>
</Flex>
</>
  )
}

export default Detail
