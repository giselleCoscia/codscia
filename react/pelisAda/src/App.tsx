import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from '@/layaut/NavBar'
import Footer from '@/layaut/Footer'
import Home from '@/page/Home.js'
import Detail from '@/page/Detail'
import { Box, Flex } from '@chakra-ui/react'
import LastMovies from '@/page/LastMovies'
import Popular from '@/page/Popular'


const App = () => {
  return <Router>
    <Flex direction="column"
        minH="100vh"
        bg="primary"  >
      <NavBar /> 
      <Flex direction="column" alignContent="center" maxW="8xl" width="full" px="4" mx="auto" flexGrow="1">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/lastMovies" element={<LastMovies/>}/>
          <Route path="/populares" element={<Popular/>}/>
        </Routes>
      </Flex>

       <Routes>
          <Route path='/detail/:id' element={<Detail/>}/>
        </Routes>
      <Footer/>
    </Flex>
    </Router>
}

export default App
