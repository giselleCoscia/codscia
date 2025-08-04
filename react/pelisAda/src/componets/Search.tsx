import { Input, InputGroup, Kbd } from '@chakra-ui/react'
import { LuSearch } from 'react-icons/lu'
import { useState, type KeyboardEvent } from 'react'
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [search, setSearch] = useState<string>('')
  const navigate = useNavigate();

  const handleKeyDown = (event:KeyboardEvent <HTMLInputElement>): void => {
    if (event.key === 'Enter' && search.trim()!==''){
      navigate(`/search?query=${encodeURIComponent(search.trim())}`)
    }
  }

  return (
    <InputGroup 
      flex="1" 
      startElement={<LuSearch />} 
    >
      <Input 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
         onKeyDown={handleKeyDown}
        placeholder="Buscar Película" 
      />
     
    </InputGroup>
  )
}

export default Search