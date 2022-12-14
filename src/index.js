import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ProfilePage from './pages/ProfilePage';
import TicketPage from './pages/TicketPage';
import ReviewPage from './pages/ReviewPage';
import RankingPage from './pages/RankingPage';
import InfluencersPage from './pages/InfluencersPage';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ProductoPage from './pages/ProductoPage';
import RecomendationPage from './pages/RecomendationPage';
import Ranking2Page from './pages/Ranking2Page';
import BuscadorPage from './pages/BuscadorPage';
import CarritocompraPage from './pages/CarritocompraPage';
import RegisterPage from './pages/RegisterPage';
import SignInPage from './pages/SignInPage';
import ComprashistoricasPage from './pages/ComprashistoricasPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/main' element={ <MainPage /> } />
        <Route path='/profile' element={ <ProfilePage /> } />
        <Route path='/ticket' element={ <TicketPage />} />
        <Route path='/reviews' element={<ReviewPage/>}/>
        <Route path='/influencers' element={<InfluencersPage/>}/>
        <Route path='/rankings' element={<RankingPage/>}/>
        <Route path='/producto/:productoId' element={<ProductoPage/>}/>
        <Route path='/recomendacion/:pcarmadoID' element={<RecomendationPage/>}/>
        <Route path='/buscador' element={<BuscadorPage/>}/>
        <Route path='/rankingf' element={<Ranking2Page/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/' element={<SignInPage/>}/>
        <Route path='/comprashistoricas' element={<ComprashistoricasPage/>}/>
        <Route path='/carritocompra' element={<CarritocompraPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
