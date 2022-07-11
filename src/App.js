import 'swiper/css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import RoutesConfig from './config/Routes';

function App() {
  return (
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route exact path='*' element={<RoutesConfig />}></Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
