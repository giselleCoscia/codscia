import { Box, Button, HStack } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { Search } from "@/componets/Search"

const NavBar = () => {
  const navigate = useNavigate()

  return (
    <Box  bg="secondary" width="100%" padding="4" flexGrow="0">
      <HStack alignContent="center" maxW="8xl" width="full" px="4" mx="auto">
        <Button border="none" variant="ghost" color="white" onClick={() => navigate("/")}>
          Home
        </Button>
        <Button border="none"  variant="ghost" color="white" onClick={() => navigate("/lastMovies")}>
          Últimos Lanzamientos
        </Button>
        <Button border="none"  variant="ghost" color="white" onClick={() => navigate("/populares")}>
          Populares
        </Button>
        <Search/>
      </HStack>
      
    </Box>
    
  )
}

export default NavBar
