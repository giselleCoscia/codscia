import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from '@/layaut/NavBar'
import Footer from '@/layaut/Footer'
import Home from '@/page/Home.js'
import Detail from '@/page/Detail'
import { Flex } from '@chakra-ui/react'
import Movies from '@/componets/Movies'

const App = () => {
  return (
    <Router>
      <Flex direction="column" minH="100vh" bg="primary">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
        <Flex
          direction="column"
          alignContent="center"
          maxW="8xl"
          width="full"
          px="4"
          mx="auto"
          flexGrow="1"
        >
          <Routes>
            <Route
              path="/lastMovies"
              element={
                <Movies endpoint="/movie/upcoming" title=" Últimas Películas" />
              }
            />
            <Route
              path="/populares"
              element={<Movies endpoint="/movie/popular" title="Populares" />}
            />
            <Route
              path="/search"
              element={<Movies endpoint="/search/movie" title="Buscado..." />}
            />
          </Routes>
        </Flex>

        <Footer />
      </Flex>
    </Router>
  )
}

export default App
