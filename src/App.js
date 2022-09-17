import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './helpers/scrollToTop';
import AppRoutes from './Routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <AppRoutes />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
