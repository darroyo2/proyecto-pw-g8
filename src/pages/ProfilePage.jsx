import "../styles/ProfilePage.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const ProfilePage = () => {
  const [correo, setCorreo] = useState("")
  const [nombre, setNombre] = useState("")
  const [telefono, setTelefono] = useState("")
  const [apellido, setApellido] = useState("")
  const [zip, setZip] = useState("")
  const [departamento, setDepartamento] = useState("")
  const [ciudad, setCiudad] = useState("")
  const [direccion, setDireccion] = useState("")
  const httpGuardarPerfil = async (usuario, nombre, apellido, correo, direccion, departamento, ciudad, zip, telefono) => {
    const data = {
      usuario_id :  usuario,
      perfil_nombre : nombre,
      perfil_apellido : apellido,
      perfil_correo : correo,
      perfil_direccion : direccion,
      perfil_Departamento : departamento,
      perfil_Ciudad : ciudad,
      perfil_Zip : zip,
      perfil_Telefono : telefono,
        
    }
    const resp = await fetch("http://localhost:4444/perfil", {
        method : "POST",
        body : JSON.stringify(data),
        headers: {
            "Content-Type" : "application/json"
        }
    })
    const dataResp = await resp.json()
    if (dataResp.error !== "") {
        console.log("Hubo un error")
    }
}
const savePerfil = (nombre, apellido, correo, direccion, departamento, ciudad, zip, telefono) => {
    console.log( `nombre : ${nombre} apellido :  ${apellido} correo : ${correo} direccion : ${direccion} departamento : ${departamento}`)
    httpGuardarPerfil("222571e6-05a8-4bec-9caa-a6dd5bfeecfc", nombre, apellido, correo, direccion, departamento, ciudad, zip, telefono)
}
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
          <div className="bloqueMedio bg-light">
            <h6>Default</h6>
            <div>Ed Va</div>
            <div>United States</div>
          </div>
          <span className=" bloqueD container bg-light">
            <form className="" action="">
              <span className="form-label">First Name</span>
              <span className="form-label inline last">Last Name</span>
              <div></div>
              <span>
                <input className="form-first form-control" type = "text" value ={nombre} onChange={(evt) => { setNombre(evt.target.value)} }/>
              </span>
              <span>
                <input className="form-last form-control" type = "text" value ={apellido} onChange={(evt) => { setApellido(evt.target.value)} }/>
              </span>
              <div></div>
              <label className="form-label">Email</label>
              <input className="form-control" type = "text" value ={correo} onChange={(evt) => { setCorreo(evt.target.value)} }/>
              <label className="form-label">Address</label>
              <input className="form-control" type = "text" value ={direccion} onChange={(evt) => { setDireccion(evt.target.value)} } />
              <span className="form-label">Aparmaent, suit, etc</span>
              <span className="form-label inline city">City</span>
              <input className="form-first form-control" type = "text" value ={departamento} onChange={(evt) => { setDepartamento(evt.target.value)} }/>
              <input className="form-last form-control" type = "text" value ={ciudad} onChange={(evt) => { setCiudad(evt.target.value)} } />
              <label className="form-label">Country/Region</label>
              <label className="form-label zip">Postal/zip code</label>
              <div></div>
              <select className="form-first form-select">
                <option>UnitedStates</option>
                <option>Perú</option>
                <option>Colombia</option>
                <option>Chile</option>
                <option>Bolivia</option>
                <option>Argentina</option>
                <option>France</option>
                <option>Germany</option>
                <option>Japan</option>
                <option>Spain</option>
              </select>
              <input className="form-last form-control" type = "text" value ={zip} onChange={(evt) => { setZip(evt.target.value)} }/>
              <label className="form-label">Phone</label>
              <input className="form-control" type = "text" value ={telefono} onChange={(evt) => { setTelefono(evt.target.value)} }/>
              <div></div>
              <button className="btn update btn-primary btn-lg" onClick={() => {savePerfil (nombre, apellido, correo, direccion, departamento, ciudad, zip, telefono)}}>
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
