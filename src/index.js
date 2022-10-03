import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
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
import rankingsPage from './pages/rankingsPage';
import buscadorPage from './pages/buscadorPage';
import carritocompraPage from './pages/carritocompraPage';
import RegisterPage from './pages/RegisterPage';
import SignInPage from './pages/SignInPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <LoginPage /> } />
        <Route path='/main' element={ <MainPage /> } />
        <Route path='/profile' element={ <ProfilePage /> } />
        <Route path='/ticket' element={ <TicketPage />} />
        <Route path='/reviews' element={<ReviewPage/>}/>
        <Route path='/influencers' element={<InfluencersPage/>}/>
        <Route path='/rankings' element={<RankingPage/>}/>
        <Route path='/producto' element={<ProductoPage/>}/>
        <Route path='/recomendacion' element={<RecomendationPage/>}/>
        <Route path='/buscador' element={<buscadorPage/>}/>
        <Route path='/rankings' element={<rankingsPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<SignInPage/>}/>
        <Route path='/carritocompra' element={<carritocompraPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
