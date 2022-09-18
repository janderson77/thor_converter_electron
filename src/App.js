import './App.css';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './helpers/scrollToTop';
import AppRoutes from './Routes';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <NavBar />
          <AppRoutes />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
