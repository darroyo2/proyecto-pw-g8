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
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import BarraNavegacion from "./BarraNavegacion";
import ConponentsPage from "./ConponentsPage";
import { RUTA_BACKEND } from "../conf";

const RecomendationPage = () => {

    const [listaPcarmado, setlistaPcarmado] = useState([])
    const [listaProductos, setListaProductos] = useState([])
    const { pcarmadoID } = useParams()
    
    const httpObtenerProductos = async () => {
        const resp = await fetch(`${RUTA_BACKEND}/lista_productos`)
        const data = await resp.json()
        setListaProductos(data)
    }
    const httpObtenerPcarmado = async (pcarmadoID) => {
        const resp = await fetch(`${RUTA_BACKEND}/recomendacion?pcarmadoID=${pcarmadoID}`)
        const data = await resp.json()
        setlistaPcarmado(data)
    }
    
    
    

    // Hook
    useEffect(() => {
        httpObtenerPcarmado(pcarmadoID)
        httpObtenerProductos()
    }, [pcarmadoID])

    return (<div className="page-producto">
        <BarraNavegacion />
        <div className="container">
            <h1>Your optimized build!</h1>
            <div className="d-flex gap-4 justify-content-end my-5">
                <button type="button" className="btn btn-primary backbt">
                    Back</button>
                <button type="button" className="btn btn-primary checkoutbt">Checkout</button>
            </div>
            <div className="row align-items-center align-self-start">
                <div className="col-4">
                    <img src={pc_gamer} className="img-fluid" />
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
                <div className="col-8">
                    <h3 className="mb-5">Components</h3>
                    <ConponentsPage pcarmado={listaPcarmado} productos={listaProductos}/>
                </div>
            </div>
            
        </div>
    </div>)
}

export default RecomendationPage;