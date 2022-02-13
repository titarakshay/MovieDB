import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import HomePage from './Components/HomePage';

function App() {
  return (
    <div className="App">
      <header >
        <Header/>
        <HomePage/>
      </header>
    </div>
  );
}

export default App;
