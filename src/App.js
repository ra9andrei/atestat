import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import Movies from './components/Movies'
import Series from './components/Series'
import Error from './components/Error'
import Pley from './components/pley'
function App() {
  return (
    <Router> <Routes>
      <Route path="/" element={<Menu />}>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Series" element={<Series />} />
        <Route path="/pley" element={<Pley />} />
        <Route path="/*" element={<Error />} />
      </Route>
    </Routes>

    </Router>
  );
}

export default App;
