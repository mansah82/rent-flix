
import './App.css';
import HomePage from './components/HomePage';
import MoviesPage from './components/MoviesPage';
import InfoMoviePage from './components/InfoMoviePage';
import ShoppingCart from './components/ShoppingCart';
import NavBar from './components/navigation/NavBar';
import { HashRouter as Router, Route, Routes} from 'react-router-dom' 



function App() {
  return (
    <div className="App">
      <main>
        <Router>
        <NavBar />
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/movies' element={<MoviesPage />} />
            <Route exact path='/info' element={<InfoMoviePage />} />
            <Route exact path='/cart' element={<ShoppingCart />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
