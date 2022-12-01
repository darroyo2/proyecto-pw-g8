import React from "react";
import { Row, Col, Button,Card, CardDeck } from 'react-bootstrap'

import { useState } from "react"

const CardProducto = (props) => {

    return <Card id="CardProducto">
        {
            // EXPRESION javascript
            (() => {
                if (props.productos.length === 0) {
                    return <div>No hay evaluaciones para este curso</div>
                }else {
                    return props.productos.map((producto) => {
                        return <Card.Body className="mb-2" key={ producto.id }>
                        <Card.Title>{ producto.nombre }</Card.Title>
                        <h5>{producto.precio}</h5>
                        <p>Shipping calculated at Checkout</p>
                        <p>{producto.descripcion}</p>
                    </Card.Body>
                    })
                }
            })()
        }
    </Card>
}

export default CardProducto