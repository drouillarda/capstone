import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" 
        element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

