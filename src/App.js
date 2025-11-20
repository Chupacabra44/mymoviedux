import "./styles.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MoviesGrid from "./components/MoviesGrid";
import WatchList from "./components/WatchList";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";

function App() {
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
            <Route path="/" element={<MoviesGrid />} />
            <Route path="/watchlist" element={<WatchList />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
