import React from "react";
import { Row, Col, Button, Card, CardDeck } from 'react-bootstrap'
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { RUTA_BACKEND } from "../conf";
import nvidia from '../images/nvidia.png'
import intel from '../images/Procesador-Intel-Core-i7-10700.png'
const ConponentsPage = (props) => {
    return<div>
    {
        // EXPRESION javascript
        (() => {
            if (props.productos.length === 0) {
                return <div>No hay mercancia existente</div>
            } else {
                var listaveri = []
                props.pcarmado.map((pcarmado) => {
                    listaveri.push(pcarmado.producto_id)
                })
                var listaveriJson = JSON.stringify(listaveri)
                console.log(listaveriJson.includes(props.productos.id))
                console.log(props.productos.length)
                return props.productos.map((producto) => {
                    if (listaveriJson.includes(producto.id)) {
                        return <div className="row">
                        <div className="col">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img src={intel}
                                        className="img-fluid components" />
                                </div>
                                <div className="flex-grow-1 ms-3">{producto.nombre}</div>
                                <div className="flex-grow-0 ms-3">{producto.price}</div>
                            </div>
                            <hr className="my-1" />
                        </div>
                        <div className="col">
                            <div className="d-flex align-items-center">
                                
                                <div className="flex-grow-1 ms-3">{producto.descripcion}</div>
                                <div className="flex-grow-0 ms-3">{producto.categoria}</div>
                            </div>
                            <hr className="my-1" />
                        </div>
                    </div>
                            
                        
                    }
                })
            }
        })()
    }
    </div>

}

export default ConponentsPage