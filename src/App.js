import "./styles.scss";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MoviesGrid from "./components/MoviesGrid";
import WatchList from "./components/WatchList";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("movies.json");
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Header />
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/watchlist">Watchlist</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<MoviesGrid movies={movies} />} />
            <Route path="/watchlist" element={<WatchList />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
