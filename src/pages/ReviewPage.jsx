import "../styles/ReviewPage.css";
import stars from '../images/stars.png';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ReviewPage = () => {
    const navigate = useNavigate();
    const [listadoReseñas, setListadoReseñas] = useState([])

    const httpObtenerReseñas = async () => {
        const resp = await fetch("http:localhost:4444/reseñas?tipo=1")
        const data = await resp.json()
        console.log(data)
        setListadoReseñas(data)
    }
    useEffect (()=> {
        httpObtenerReseñas()
    })
  return (
    <body className="fondo">
              <div><nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <i id="home" className="bi bi-controller"></i>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" onClick={() => {navigate('/main')}}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Support</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => {navigate('/reviews')}}>Reviews</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => {navigate('/rankings')}}>Ranking</a>
                        </li>
                    </ul>
                    <form className="d-flex align-items-center gap-4" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <a href="#" type="submit"><i className="bi bi-search"></i></a>
                        <a href="#"><i className="bi bi-person-fill"></i></a>
                        <a href="#"><i className="bi bi-cart-fill"></i></a>
                    </form>
                </div>
            </div>
        </nav></div>
        
        <div className="bg-light bloqueReview">
            <div className="head1Review">
                <h1>User Reviews</h1>
            </div>
            <div >
                <h4 className="globalRate">Global Rate</h4>
                <span><img className="estrellas" src={stars}></img></span>
            </div>
            <hr></hr>
            <div className="comentario">
                <h4>Juan Lopez</h4>
                <p className="textoComentario">I completely recomend this service</p>
            </div>
            <hr></hr>
            <div className="comentario">
                <h4>Jhon Doe</h4>
                <p className="textoComentario">Great service</p>
            </div>
            <hr></hr>
            <div className="comentario">
                <h4>Carl Johnson</h4>
                <p className="textoComentario">Pc well builded and nice case quality</p>
            </div>
        </div>
    </body>
  );
};

export default ReviewPage;
