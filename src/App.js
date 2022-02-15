import { BrowserRouter } from 'react-router-dom';
import { Navigate, Route, Routes } from "react-router"
import './App.css';
import ContentDetails from './Components/Contents/ContentDetails';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import Cast from './Components/Cast';
import PersonDetails from './Components/PersonDetails';

function App() {
  return (
    < BrowserRouter >
      <Header />
      <div className='d-flex media-d-b'>
        < Routes>
          
          <Route exact path='/popular' element={<HomePage/>} />
          <Route exact path='/movie/:id' element={<ContentDetails/>} />
          <Route exact path='/movie/:id/cast' element={<Cast/>} />
          <Route exact path='/person/:id' element={<PersonDetails/>} />
          <Route
            exact
            path="/"
            element={<Navigate to="/popular" />}
          />
        </ Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
