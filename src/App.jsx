import { Route, Routes } from 'react-router';
import Layout from './pages/Layout';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Dash from './pages/Dash';
import Deals from './pages/Deals';
import Services from './pages/Services';
import Jobs from './pages/Jobs';
import Menus from './pages/Menus';
import Movies from './pages/Movies';
import Newsletter from './pages/Newsletter';
import GreatThingsToTry from './pages/GreatThingsToTry';
import Listings from './pages/Listings';
import Article from './pages/Article';

const App = () => {
  return (
    <Routes>
      <Route path="/manzashops/" element={<Layout />}>
        <Route index element={<Dash />} />
        <Route path="*" element={<NoPage />} />
        <Route path="home" element={<Home />} />
        <Route path="deals" element={<Deals />} />
        <Route path="services" element={<Services />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="menus" element={<Menus />} />
        <Route path="movies" element={<Movies />} />
        <Route path="newsletter" element={<Newsletter />} />
        <Route path="newsletter/articles/:id" element={<Article />} />
        <Route path="great-things-to-try" element={<GreatThingsToTry />} />
        <Route path="listings" element={<Listings />} />
      </Route>
    </Routes>
  );
};

export default App;
