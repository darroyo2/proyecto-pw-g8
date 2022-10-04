import "../styles/RegisterSignInPage.css";
import { useNavigate } from "react-router-dom";
const SignInPage = () => {
    const navigate = useNavigate();
    return <div>
        <body className="bodyregistro">
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
	        <form className="formulario">
                <h4 clasName="tituloregistro">Iniciar Sesion</h4>
                <input className="controls input_iniciosesion" type="email" required name="correo" id="correo" placeholder="Ingrese su Correo"/>
                <input className="controls input_iniciosesion" type="password" required name="contraseña" id="contraseña" placeholder="Ingrese su Contraseña"/>
                <button className="botonregistro">Iniciar Sesion</button>
                <p className="link"><a href="#">¿Aún no has creado tu cuenta?</a></p> 
	        </form>
        </body>
    </div>
}

export default SignInPage;