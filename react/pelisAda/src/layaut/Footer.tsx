import { Box, Center, Image} from "@chakra-ui/react"


const Footer = () => {
  return (
    <Center color="text" bg="secondary"  width="100%" padding="4" >
     <Image
    src="https://img.freepik.com/foto-gratis/vista-elementos-cine-3d_23-2150720756.jpg"
    boxSize="85px"
    borderRadius="full"
    fit="cover"
    alt="Naruto Uzumaki"  />
    </Center>
    
  )
}

export default Footer