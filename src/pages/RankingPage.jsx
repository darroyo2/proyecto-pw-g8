import "../styles/RankingPage.css";
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

const RankingPage = () => {
    
    const navigate = useNavigate();
    return (<div id="ranking_body">
        <header>
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
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <a href="#" type="submit"><i className="bi bi-search"></i></a>
                        <a href="#"><i className="bi bi-person-fill"></i></a>
                        <a href="#"><i className="bi bi-cart-fill"></i></a>
                    </form>
                </div>
            </div>
        </nav>
        </header>
        <main>
        <div className="container mt-5">
            <div className="accordion " id="accordionExample">
                <div className="accordion-item pc-rank">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            <div className="flex-shrink-0">
                                <img  src={pc} className="img-fluid pc_rank " />
                            </div>
                            <div className="flex-grow-1 ms-3">Monster PC</div>
                            <div className="flex-shrink-0 me-3">$1899</div>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="d-flex flex-column gap-2">
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <img src={intel}
                                            className="img-fluid components" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">INTEL CORE I7-12700F 12-CORE</div>
                                    <div className="flex-grow-0 ms-3">$359</div>
                                </div>
                                <hr className="my-1" />
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <img src={nvidia} className="img-fluid components" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">NVIDIA GEFORCE RTX 3070 8GB (VR READY)</div>
                                    <div className="flex-grow-0 ms-3">$599</div>
                                </div>
                                <hr className="my-1" />
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <img src={ddram} className="img-fluid components" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">16GB DDR4 DUAL CHANNEL</div>
                                    <div className="flex-grow-0 ms-3">$79</div>
                                </div>
                                <hr className="my-1" />
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <img src={nvme} className="img-fluid components" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">1TB NVME M.2</div>
                                    <div className="flex-grow-0 ms-3">$99</div>
                                </div>
                                <hr className="my-1" />
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <img src={master_liquid} className="img-fluid components" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">CM MASTERLIQUID ML240L</div>
                                    <div className="flex-grow-0 ms-3">$99</div>
                                </div>
                                <hr className="my-1" />
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <img src={fans} className="img-fluid components" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">QTY 4X CM MASTERFANS RGB</div>
                                    <div className="flex-grow-0 ms-3">$49</div>
                                </div>
                                <hr className="my-1" />
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <img src={carcasa} className="img-fluid components" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">COOLER MASTER TD500 RGB</div>
                                    <div className="flex-grow-0 ms-3">$129</div>
                                </div>
                                <hr className="my-1" />
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <img src={power_suply} className="img-fluid components" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">700W ATX 80 PLUS GOLD</div>
                                    <div className="flex-grow-0 ms-3">$89</div>
                                </div>
                                <hr className="my-1" />
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <img src={mother_board} className="img-fluid components" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">ASUS B660 SERIES | INTEL</div>
                                    <div className="flex-grow-0 ms-3">$149</div>
                                </div>
                                <hr className="my-1" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item pc-rank">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <div className="flex-shrink-0">
                                <img  src={pc} className="img-fluid pc_rank " />
                            </div>
                            <div className="flex-grow-1 ms-3">Cruser Build</div>
                            <div className="flex-shrink-0 me-3">$1759</div>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="d-flex flex-column gap-2">
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <img src={intel}
                                            className="img-fluid components" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">INTEL CORE I7-12700F 12-CORE</div>
                                    <div className="flex-grow-0 ms-3">$359</div>
                                </div>
                                <hr className="my-1" />
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <img src={nvidia} className="img-fluid components" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">NVIDIA GEFORCE RTX 3070 8GB (VR READY)</div>
                                    <div className="flex-grow-0 ms-3">$599</div>
                                </div>
                                <hr className="my-1" />
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <img src={ddram} className="img-fluid components" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">16GB DDR4 DUAL CHANNEL</div>
                                    <div className="flex-grow-0 ms-3">$79</div>
                                </div>
                                <hr className="my-1" />
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <img src={nvme} className="img-fluid components" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">1TB NVME M.2</div>
                                    <div className="flex-grow-0 ms-3">$99</div>
                                </div>
                                <hr className="my-1" />
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <img src={master_liquid} className="img-fluid components" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">CM MASTERLIQUID ML240L</div>
                                    <div className="flex-grow-0 ms-3">$99</div>
                                </div>
                                <hr className="my-1" />
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <img src={fans} className="img-fluid components" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">QTY 4X CM MASTERFANS RGB</div>
                                    <div className="flex-grow-0 ms-3">$49</div>
                                </div>
                                <hr className="my-1" />
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <img src={carcasa} className="img-fluid components" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">COOLER MASTER TD500 RGB</div>
                                    <div className="flex-grow-0 ms-3">$129</div>
                                </div>
                                <hr className="my-1" />
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <img src={power_suply} className="img-fluid components" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">700W ATX 80 PLUS GOLD</div>
                                    <div className="flex-grow-0 ms-3">$89</div>
                                </div>
                                <hr className="my-1" />
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <img src={mother_board} className="img-fluid components" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">ASUS B660 SERIES | INTEL</div>
                                    <div className="flex-grow-0 ms-3">$149</div>
                                </div>
                                <hr className="my-1" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item pc-rank">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <div className="flex-shrink-0">
                                <img  src={pc} className="img-fluid pc_rank " />
                            </div>
                            <div className="flex-grow-1 ms-3">Nasa PC</div>
                            <div className="flex-shrink-0 me-3">$1679</div>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="d-flex flex-column gap-2">
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <img src={intel}
                                            className="img-fluid components" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">INTEL CORE I7-12700F 12-CORE</div>
                                    <div className="flex-grow-0 ms-3">$359</div>
                                </div>
                                <hr className="my-1" />
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <img src={nvidia} className="img-fluid components" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">NVIDIA GEFORCE RTX 3070 8GB (VR READY)</div>
                                    <div className="flex-grow-0 ms-3">$599</div>
                                </div>
                                <hr className="my-1" />
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <img src={ddram} className="img-fluid components" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">16GB DDR4 DUAL CHANNEL</div>
                                    <div className="flex-grow-0 ms-3">$79</div>
                                </div>
                                <hr className="my-1" />
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <img src={nvme} className="img-fluid components" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">1TB NVME M.2</div>
                                    <div className="flex-grow-0 ms-3">$99</div>
                                </div>
                                <hr className="my-1" />
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <img src={master_liquid} className="img-fluid components" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">CM MASTERLIQUID ML240L</div>
                                    <div className="flex-grow-0 ms-3">$99</div>
                                </div>
                                <hr className="my-1" />
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <img src={fans} className="img-fluid components" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">QTY 4X CM MASTERFANS RGB</div>
                                    <div className="flex-grow-0 ms-3">$49</div>
                                </div>
                                <hr className="my-1" />
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <img src={carcasa} className="img-fluid components" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">COOLER MASTER TD500 RGB</div>
                                    <div className="flex-grow-0 ms-3">$129</div>
                                </div>
                                <hr className="my-1" />
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <img src={power_suply} className="img-fluid components" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">700W ATX 80 PLUS GOLD</div>
                                    <div className="flex-grow-0 ms-3">$89</div>
                                </div>
                                <hr className="my-1" />
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <img src={mother_board} className="img-fluid components" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">ASUS B660 SERIES | INTEL</div>
                                    <div className="flex-grow-0 ms-3">$149</div>
                                </div>
                                <hr className="my-1" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item pc-rank">
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            <div className="flex-shrink-0">
                                <img  src={pc} className="img-fluid pc_rank " />
                            </div>
                            <div className="flex-grow-1 ms-3">Budget Build</div>
                            <div className="flex-shrink-0 me-3">$1299</div>
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="d-flex flex-column gap-2">
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <img src={intel}
                                            className="img-fluid components" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">INTEL CORE I7-12700F 12-CORE</div>
                                    <div className="flex-grow-0 ms-3">$359</div>
                                </div>
                                <hr className="my-1" />
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <img src={nvidia} className="img-fluid components" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">NVIDIA GEFORCE RTX 3070 8GB (VR READY)</div>
                                    <div className="flex-grow-0 ms-3">$599</div>
                                </div>
                                <hr className="my-1" />
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <img src={ddram} className="img-fluid components" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">16GB DDR4 DUAL CHANNEL</div>
                                    <div className="flex-grow-0 ms-3">$79</div>
                                </div>
                                <hr className="my-1" />
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <img src={nvme} className="img-fluid components" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">1TB NVME M.2</div>
                                    <div className="flex-grow-0 ms-3">$99</div>
                                </div>
                                <hr className="my-1" />
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <img src={master_liquid} className="img-fluid components" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">CM MASTERLIQUID ML240L</div>
                                    <div className="flex-grow-0 ms-3">$99</div>
                                </div>
                                <hr className="my-1" />
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <img src={fans} className="img-fluid components" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">QTY 4X CM MASTERFANS RGB</div>
                                    <div className="flex-grow-0 ms-3">$49</div>
                                </div>
                                <hr className="my-1" />
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <img src={carcasa} className="img-fluid components" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">COOLER MASTER TD500 RGB</div>
                                    <div className="flex-grow-0 ms-3">$129</div>
                                </div>
                                <hr className="my-1" />
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <img src={power_suply} className="img-fluid components" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">700W ATX 80 PLUS GOLD</div>
                                    <div className="flex-grow-0 ms-3">$89</div>
                                </div>
                                <hr className="my-1" />
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <img src={mother_board} className="img-fluid components" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">ASUS B660 SERIES | INTEL</div>
                                    <div className="flex-grow-0 ms-3">$149</div>
                                </div>
                                <hr className="my-1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </main>
        <footer></footer>
    </div>
    );
};

export default RankingPage;