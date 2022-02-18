import { BrowserRouter } from 'react-router-dom';
import { Navigate, Route, Routes } from "react-router"


import HomePage from './Components/HomePage';
import Header from './Components/Header';


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
          <Route exact path='/popular' element={<HomePage/>}/>
          <Route exact path='/:discover' element={<HomePage/>}/>

        </ Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
