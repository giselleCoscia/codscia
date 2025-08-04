import { ButtonGroup, Center, IconButton, Pagination } from '@chakra-ui/react'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'

interface PagProps {
  page: number
  totalPages: number
  setPage: (page: number) => void
}
const Pag = ({ page, totalPages, setPage }: PagProps) => {
  return (
    <Center>
      <Pagination.Root
        count={totalPages}
        pageSize={2}
        page={page}
        defaultPage={1}
        onPageChange={({ page }) => {
          setPage(page)
          console.log('Página seleccionada:', page)
        }}
      >
        <ButtonGroup variant="outline" size="sm">
          <Pagination.PrevTrigger asChild>
            <IconButton aria-label="Anterior">
              <LuChevronLeft />
            </IconButton>
          </Pagination.PrevTrigger>

          <Pagination.Items
            color="text"
            render={({ value }) => (
              <IconButton
                key={value}
                aria-label={`Page ${value}`}
                variant={{ base: 'outline', _selected: 'solid' }}
                onClick={() => setPage(value)}
              >
                {value}
              </IconButton>
            )}
          />

          <Pagination.NextTrigger asChild>
            <IconButton>
              <LuChevronRight />
            </IconButton>
          </Pagination.NextTrigger>
        </ButtonGroup>
      </Pagination.Root>
    </Center>
  )
}
export default Pag
