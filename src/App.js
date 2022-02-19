import { BrowserRouter } from 'react-router-dom';
import { Navigate, Route, Routes, useLocation, useParams } from "react-router"


import HomePage from './Components/HomePage';
import Header from './Components/Header';
import ContentDetails from './Components/Contents/ContentDetails';
import GenreList from './Components/GenreList';


function App() {
  

  return (
    < BrowserRouter >
      <Header />
      <div className="main-container">
        <div className="sub-container-1">

        <GenreList />
        </div>
      <div className='sub-container-2'>
        < Routes>
          <Route
            exact
            path="/"
            element={<Navigate to="/popular" />}
          />
           <Route exact path='/:discover' element={<HomePage />}/>
           {/* <Route exact path='/:genre/:name' element={<HomePage />}/> */}
           <Route exact path='/movie/:name' element={<ContentDetails />}/>

        </ Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
