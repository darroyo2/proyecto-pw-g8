import React from "react";

import {  Card } from 'react-bootstrap'
import { propTypes } from "react-bootstrap/esm/Image";

const GridProductos = (props) => {
    return<div> {props.productos.map((producto)=>{
                
                    return<Card>
                       <Card.Body>{producto.nombre} </Card.Body>
                    </Card>
            })}</div>}
        


export default GridProductos