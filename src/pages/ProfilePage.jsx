import "../styles/ProfilePage.css";
import { useNavigate } from "react-router-dom";
const ProfilePage = () => {
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

      <div>
        <div>
          <div className="bloqueL container">menu lateral</div>
          <span className=" bloqueD container bg-light">
            <form className="" action="">
              <span className="form-label">First Name</span>
              <span className="form-label inline last">Last Name</span>
              <div></div>
              <span>
                <input className="form-first form-control" />
              </span>
              <span>
                <input className="form-last form-control" />
              </span>
              <div></div>
              <label className="form-label">Email</label>
              <input className="form-control" />
              <label className="form-label">Address</label>
              <input className="form-control" />
              <span className="form-label">Aparmaent, suit, etc</span>
              <span className="form-label inline city">City</span>
              <input className="form-first form-control" />
              <input className="form-last form-control" />
              <label className="form-label">Country/Region</label>
              <label className="form-label zip">Postal/zip code</label>
              <div></div>
              <select className="form-first form-select">
                <option>UnitedStates</option>
                <option>Perú</option>
                <option>Colombia</option>
              </select>
              <input className="form-last form-control" />
              <label className="form-label">Phone</label>
              <input className="form-control" />
              <div></div>
              <button className="btn update btn-primary btn-lg">
                Update Info
              </button>
              <span className="cancel">Cancel</span>
            </form>
          </span>
        </div>
      </div>
    </body>
  );
};

export default ProfilePage;
