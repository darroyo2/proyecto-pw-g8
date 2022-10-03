import "../styles/RecomendationPage.css";
import carcasa from '../images/carcasa.png'
import fans from '../images/fans.png'
import ddram from '../images/ddram.png'
import master_liquid from '../images/master_liquid.png'
import mother_board from '../images/mother_board.png'
import nvidia from '../images/nvidia.png'
import nvme from '../images/nvme.png'
import pc_gamer from '../images/pc_gamer.png'
import pc from '../images/pc.png'
import power_suply from '../images/power_suply.png'
import intel from '../images/Procesador-Intel-Core-i7-10700.png'
import { useNavigate } from "react-router-dom";

const RecomendationPage = () => {
    const navigate = useNavigate();
    return (<body className="page-producto">
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
                        <a className="nav-link" onClick={() => {navigate('/reviews')}}>Reviews</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => {navigate('/rankings')}}>Ranking</a>
                    </li>
                </ul>
                <form className="d-flex align-items-center gap-4" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <a href="#" type="submit"><i className="bi bi-search"></i></a>
                    <a href="#"><i className="bi bi-person-fill"></i></a>
                    <a href="#"><i className="bi bi-cart-fill"></i></a>
                </form>
            </div>
        </div>
    </nav>
    <div className="container">
        <h1>Your optimized build!</h1>
        <div className="d-flex gap-4 justify-content-end my-5">
            <button type="button" className="btn btn-primary backbt">
                 Back</button>
                    <button type="button" className="btn btn-primary checkoutbt">Checkout</button>
        </div>
        <div className="row align-items-center align-self-start">
            <div className="col-4">
                <img src={pc_gamer} className="img-fluid"/>
            </div>
            <div className="col-8">
                <h3 className="mb-5">Components</h3>
                <div className="componentes">
                    <div className="row">
                        <div className="col">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img src={intel}
                                        className="img-fluid components"/>
                                </div>
                                <div className="flex-grow-1 ms-3">INTEL CORE I7-12700F 12-CORE</div>
                                <div className="flex-grow-0 ms-3">$359</div>
                            </div>
                            <hr className="my-1"/>
                        </div>
                        <div className="col">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img src={nvidia}
                                        className="img-fluid components"/>
                                </div>
                                <div className="flex-grow-1 ms-3">NVIDIA GEFORCE RTX 3070 8GB (VR READY)</div>
                                <div className="flex-grow-0 ms-3">$679</div>
                            </div>
                            <hr className="my-1"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img src={ddram}
                                        className="img-fluid components"/>
                                </div>
                                <div className="flex-grow-1 ms-3">16GB DDR4 DUAL CHANNEL</div>
                                <div className="flex-grow-0 ms-3">$69</div>
                            </div>
                            <hr className="my-1"/>
                        </div>
                        <div className="col">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img src={nvme}
                                        className="img-fluid components"/>
                                </div>
                                <div className="flex-grow-1 ms-3">1TB NVME M.2</div>
                                <div className="flex-grow-0 ms-3">$99</div>
                            </div>
                            <hr className="my-1"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img src={master_liquid}
                                        className="img-fluid components"/>
                                </div>
                                <div className="flex-grow-1 ms-3">CM MASTERLIQUID ML24OL</div>
                                <div className="flex-grow-0 ms-3">$89</div>
                            </div>
                            <hr className="my-1"/>
                        </div>
                        <div className="col">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img src={fans}
                                        className="img-fluid components"/>
                                </div>
                                <div className="flex-grow-1 ms-3">QTY 4X CM MASTERFANS RGB</div>
                                <div className="flex-grow-0 ms-3">$29</div>
                            </div>
                            <hr className="my-1"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img src={pc_gamer}
                                        className="img-fluid components"/>
                                </div>
                                <div className="flex-grow-1 ms-3">COOLER MASTER TD500 RGB</div>
                                <div className="flex-grow-0 ms-3">$99</div>
                            </div>
                            <hr className="my-1"/>
                        </div>
                        <div className="col">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img src={power_suply}
                                        className="img-fluid components"/>
                                </div>
                                <div className="flex-grow-1 ms-3">700W ATX 80 PLUS GOLD</div>
                                <div className="flex-grow-0 ms-3">$79</div>
                            </div>
                            <hr className="my-1"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img src={mother_board}
                                        className="img-fluid components"/>
                                </div>
                                <div className="flex-grow-1 ms-3">ASUS PRIME B660M-A | INTEL</div>
                                <div className="flex-grow-0 ms-3">$149</div>
                            </div>
                            <hr className="my-1"/>
                        </div>
                        <div className="col">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img src={intel}
                                        className="img-fluid components"/>
                                </div>
                                <div className="flex-grow-1 ms-3">WIRELLESS 802.11AC</div>
                                <div className="flex-grow-0 ms-3">$29</div>
                            </div>
                            <hr className="my-1"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img src={intel}
                                        className="img-fluid components"/>
                                </div>
                                <div className="flex-grow-1 ms-3">WINDOWS 11 HOME + USB RECOVERY</div>
                                <div className="flex-grow-0 ms-3">$120</div>
                            </div>
                            <hr className="my-1"/>
                        </div>
                        <div className="col">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img src={intel}
                                        className="img-fluid components"/>
                                </div>
                                <div className="flex-grow-1 ms-3">BUILD + SETUP + TESTING + WARRANTY</div>
                                <div className="flex-grow-0 ms-3">$99</div>
                            </div>
                            <hr className="my-1"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="card mt-4 ms-5 preci">
            <div className="card-body preci">
                <div className="row">
                    <div className="col">
                        Components price
                        <p className="mt-3">$1899</p>
                    </div>
                    <div className="col">
                        Build fee
                        <p className="mt-3">$99</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </body>)
}

export default RecomendationPage;