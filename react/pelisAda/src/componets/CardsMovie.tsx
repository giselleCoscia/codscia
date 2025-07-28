import { Card, Image, Flex, createIcon } from '@chakra-ui/react'
import { Tooltip } from "@/components/ui/tooltip"
import { useNavigate } from 'react-router-dom'

interface Props {
  id: number
  title: string
  img: string
}

const CardsMovie = ({ id, title, img }: Props) => {
  const navigate = useNavigate()
  return (
    <Card.Root
      borderRadius="md"
      overflow="hidden"
      boxShadow="md"
      cursor="pointer"
      transition="transform 0.3s ease-in-out"
      _hover={{ transform: 'scale(1.05)' }}
      onClick={() => navigate(`/detail/${id}`)}
      minW="2xs"
    >
      <Image src={`https://image.tmdb.org/t/p/w400${img}`} />
      <Flex
        height="68px"
        spaceX="22"
        display="flex"
        align="center"
        justifyContent="space-between"
        bg="terceary"
        padding="5"
      >
        <Tooltip content={title}>
        <Card.Title color="text"> {title.length> 25? title.slice(0,25)+"...":title}</Card.Title>
        </Tooltip>
        <HeartIcon boxSize={6} color="red.400" />
      </Flex>
    </Card.Root>
  )
}

const HeartIcon = createIcon({
  displayName: 'HeartIcon',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        fill="currentColor"
        d="M19.5 13.572l-7.5 7.428l-7.5-7.428a5 5 0 1 1 7.5-6.566a5 5 0 1 1 7.5 6.572"
      />
    </>
  ),
})

export default CardsMovie
