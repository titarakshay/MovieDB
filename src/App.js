import { BrowserRouter } from 'react-router-dom';
import { Navigate, Route, Routes } from "react-router"


import HomePage from './Components/HomePage';
import Header from './Components/Header';
import ContentDetails from './Components/Contents/ContentDetails';
import GenreList from './Components/GenreList';
import Cast from './Components/Cast';
import PersonDetails from './Components/PersonDetails';
import SingleContentDetails from './Components/Contents/SingleContentDetails';


function App() {
  
  const handleClick = (content) => {
   if(content ==="movies"){
    console.log("movies");
   }
   else if(content === "shows"){
    console.log("shows");
   }
  };

  return (
    < BrowserRouter >
      <Header handleClick={handleClick}/>
      <div className="main-container">
        <div className="sub-container-1">

        <GenreList  handleClick={handleClick}/>
        </div>
      <div className='sub-container-2'>
        < Routes>
          <Route
            exact
            path="/"
            element={<Navigate to="/popular" />}
          />
           <Route exact path='/:discover' element={<HomePage />}/>
           <Route exact path='/genre/:name' element={<SingleContentDetails   />}/>
           <Route exact path='/movie/:name' element={<ContentDetails />}/>
           <Route exact path='/movie/:id/cast' element={<Cast />}/>
           <Route exact path='/person/:id' element={<PersonDetails />}/>


        </ Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
