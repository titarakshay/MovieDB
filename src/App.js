import { BrowserRouter } from 'react-router-dom';
import { Navigate, Route, Routes, useParams } from "react-router"


import HomePage from './Components/HomePage';
import Header from './Components/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY, BASEURL } from './utils/app';


function App() {
  const [movieList, setMovieList] = useState([]);
  const {discover}  = useParams();
  const [genresId, setGenresId]=useState(0)
  const [genre,setGenre] =useState()
  useEffect(() => {
    if (genresId === true){
      axios
      .get(`${BASEURL}/discover/movie?api_key=${API_KEY}&with_genres=${genresId}&sort_by=popularity.desc`)
      .then((res) => setMovieList(res.data?.results));
    }else{
      console.log("api");
      axios
      .get(`${BASEURL}/movie/${discover?discover:"popular"}?api_key=${API_KEY}&language=en-US&page=1`)
      .then((res) => setMovieList(res.data?.results));
    }
  }, [discover,genresId]);
  const handleClick = (id) => {
    setGenresId(id);
  };
  console.log(movieList,"listed");
  return (
    < BrowserRouter >
      <Header />
      <div className='d-flex media-d-b'>
        < Routes>
          <Route
            exact
            path="/"
            element={<Navigate to="/popular" />}
          />
          <Route exact path='/:discover' element={<HomePage movieList={movieList} handleClick={handleClick} />}/>
          {/* <Route exact path='/genre/:name' element={<HomePage genre={true}/>}/> */}

        </ Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
