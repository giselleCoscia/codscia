

import { ButtonGroup, Center, IconButton, Pagination } from "@chakra-ui/react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"

const Pag = () => {
  return (
     <Center>
<Pagination.Root   count={20} pageSize={2} defaultPage={1}>
      <ButtonGroup   variant="outline" size="sm">
        <Pagination.PrevTrigger  asChild>
          <IconButton >
            <LuChevronLeft />
          </IconButton>
        </Pagination.PrevTrigger>

        <Pagination.Items   color="text" 
          render={(page) => (
            <IconButton   variant={{ base: "outline", _selected: "solid" }}>
              {page.value}
            </IconButton>
          )}
        />

        <Pagination.NextTrigger asChild>
          <IconButton >
            <LuChevronRight  />
          </IconButton>
        </Pagination.NextTrigger>
      </ButtonGroup>
    </Pagination.Root>
     </Center>
    
  )
}
export default Pag