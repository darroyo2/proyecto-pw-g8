import "../styles/TicketPage.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const TicketPage = () => {
    const [email, setEmail] = useState("")
    const [nombre, setNombre] = useState("")
    const [telefono, setTelefono] = useState("")
    const [asunto, setAsunto] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const httpGuardarReporte = async (usuario, email, nombre, telefono, asunto, descripcion) => {
        const data = {
            usuario_id : usuario,
            reporte_email : email,
            reporte_nombre : nombre,
            reporte_telefono : telefono,
            reporte_asunto : asunto,
            reporte_descripcion : descripcion
        }
        const resp = await fetch("http://localhost:4444/reporte", {
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
    const saveReporte = (email, nombre, telefono, asunto, descripcion) => {
        console.log( `email : ${email} nombre :  ${nombre} telefono : ${telefono} asunto : ${asunto} descripcion : ${descripcion}`)
        httpGuardarReporte("222571e6-05a8-4bec-9caa-a6dd5bfeecfc", email, nombre, telefono, asunto, descripcion)
    }
  const navigate = useNavigate();
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
        <h1 className="head1">Submit a Request</h1>
        <div className=" bloqueT bg-light">
              <label className="form-label">Email</label>
              <input className="form-control" type = "text" value ={email} onChange={(evt) => { setEmail(evt.target.value)} }/>
              <label className="form-label">Name</label>
              <input className="form-control" type = "text" value ={nombre} onChange={(evt) => { setNombre(evt.target.value)} } />
              <label className="form-label">Phone</label>
              <input className="form-control" type = "text" value ={telefono} onChange={(evt) => { setTelefono(evt.target.value)} }/>
              <label className="form-label">Subject</label>
              <input className="form-control" type = "text" value ={asunto} onChange={(evt) => { setAsunto(evt.target.value)} } />
              <label calssName="form-label">Description</label>
              <textarea className="form-control"rows="8" type = "text" value ={descripcion} onChange={(evt) => { setDescripcion(evt.target.value)} }></textarea>
              <button className="btn submit btn-primary btn-lg" onClick={() => {saveReporte(email, nombre, telefono, asunto, descripcion)}}>
              Submit
            </button>
          </div>
    </body>
  );
};

export default TicketPage;
