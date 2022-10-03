import "../styles/InfluencersPage.css";
import iconotop5 from "../images/mrtop5.jpg";
import iconoshortcircuit from "../images/shortcircuit.jpg";
import { useNavigate } from "react-router-dom";

const InfluencersPage = () => {
  const navigate = useNavigate();
  return (
    <body className="fondo">
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <i id="home" className="bi bi-controller"></i>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="page"
                    onClick={() => {
                      navigate("/main");
                    }}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Support
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => {
                      navigate("/reviews");
                    }}
                  >
                    Reviews
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => {
                      navigate("/rankings");
                    }}
                  >
                    Ranking
                  </a>
                </li>
              </ul>
              <form className="d-flex align-items-center gap-4" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <a href="#" type="submit">
                  <i className="bi bi-search"></i>
                </a>
                <a href="#">
                  <i className="bi bi-person-fill"></i>
                </a>
                <a href="#">
                  <i className="bi bi-cart-fill"></i>
                </a>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <div className="bg-light">
        <h1 className="head1Influencers">Influencers</h1>
        <div>
          <iframe
            className="videoemb"
            src="https://www.youtube.com/embed/4vpPJb392Vg"
          ></iframe>
          <iframe
            className="videoemb"
            src="https://www.youtube.com/embed/UhO7MLntkDE"
          ></iframe>
          <div></div>
          <div>
            <img className="iconoTop5" src={iconotop5}></img>
            <div className=" container descriptionInf">
              <h4 className="nameInf"> MR TOP 5.</h4>
              <div className="redline"></div>
              <div className="textInf">Thanks to @MrTop5 for showing off the unboxing of the #BuildRedux
              PC! Check out his video to see his PC and setup!</div>
            </div>
            <img className="iconoSC" src={iconoshortcircuit}></img>
            <div className=" container descriptionInf">
              <h4 className="nameInf"> SHORT CIRCUIT.</h4>
              <div className="purpleline"></div>
              <div className="textInf">Thanks for the awesome review @ShortCircuit</div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default InfluencersPage;
