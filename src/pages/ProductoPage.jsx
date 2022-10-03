import nvidia from '../images/nvidia.png'
import "../styles/ProductoPage.css";
import { useNavigate } from "react-router-dom";
const ProductoPage = () => {
    const navigate = useNavigate();
    return (<div className="producto-page">
        <nav className="navbar navbar-expand-lg navbar-dark">
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
                            <a className="nav-link" onClick={() => { navigate('/reviews') }}>Reviews</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => { navigate('/rankings') }}>Ranking</a>
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
        </nav>
        <div className="container mt-5">
            <div className="row align-items-center align-self-start ustify-content-center">
                <div className="col">
                    <div className="card mx-5 producto">
                        <img src={nvidia} className="img-fluid my-4 mx-3 p-4" />
                        <div className="card-body text-center">
                            <a href="#" className="btn btn-primary my-2 al-carrito">Add to the car</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mx-5 detalles">
                        <div className="card-body">
                            <h1 className="card-title">NVIDIA GEFORCE GTX 1650 4GB</h1>
                            <h5>$299</h5>
                            <p>Shipping calculated at Checkout</p>
                            <table className="table align-middle table-bordered datos-producto">
                                <tbody>
                                    <tr>
                                        <th className="col-sm-3">CHIPSET MANUFACTURER</th>
                                        <td className="col-sm-9">NVIDIA</td>
                                    </tr>

                                    <tr>
                                        <th className="col-sm-3">GPU</th>
                                        <td className="col-sm-9">
                                            Geforce GTX 1650
                                        </td>

                                    </tr>

                                    <tr>
                                        <th className="col-sm-3">CORE CLOCK</th>
                                        <td className="col-sm-9">1530 MHz</td>

                                    </tr>

                                    <tr>
                                        <th className="col-sm-3">BOOST CLOCK</th>
                                        <td className="col-sm-9">
                                            <p>OC Mode: 1800 MHz</p>
                                            <p>Gaming Mode(Default): 1770 MHz</p>
                                        </td>

                                    </tr>

                                    <tr>
                                        <th className="col-sm-3">CUDA CORES</th>
                                        <td className="col-sm-9">
                                            1280
                                        </td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export default ProductoPage