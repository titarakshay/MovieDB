import { BrowserRouter } from 'react-router-dom';
import { Navigate, Route, Routes, useLocation, useParams } from "react-router"


import HomePage from './Components/HomePage';
import Header from './Components/Header';
import ContentDetails from './Components/Contents/ContentDetails';


function App() {
  

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
           <Route exact path='/:discover' element={<HomePage />}/>
           <Route exact path='/:genre/:name' element={<HomePage />}/>
           <Route exact path='/movie/:name' element={<ContentDetails />}/>

        </ Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
