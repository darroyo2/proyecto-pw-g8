import nvidia from '../images/nvidia.png'
import "../styles/ProductoPage.css";
import BarraNavegacion from "./BarraNavegacion";
import ConponentsPage from "./BarraNavegacion";
import { Row, Col, Button } from 'react-bootstrap'
import CardProducto from "./CardProducto";
import { RUTA_BACKEND } from "../conf";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
const ProductoPage = () => {
    const [listadoProductos, setListadoProductos] = useState([])
    const { productoId } = useParams()

    const httpObtenerProductos = async (productoId) => {
        const resp = await fetch(`${RUTA_BACKEND}/producto?productoId=${productoId}`)
        const data = await resp.json()
        setListadoProductos(data)
    }

    // Hook
    useEffect(() => {
        httpObtenerProductos(productoId)
    }, [productoId])

    return (<div className="producto-page">
        <BarraNavegacion />
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
                    <CardProducto productos={listadoProductos}/>
                </div>
            </div>
        </div>
    </div>)
}
export default ProductoPage