import React from "react";
import Card from 'react-bootstrap/Card';
function CardInfo(props) {
    return (
       
            <Card>
                <Card.Header>INFORMACIÓN</Card.Header>
                <Card.Body>
                    <p>Cuenta: <strong>5019999961</strong></p>
                    <hr />
                    <p>Tipo: <strong>Colectiva</strong></p>
                    <hr />
                    <p>Estatus:<strong > Activo</strong></p>
                </Card.Body>
            </Card>
     

    )
}
export default CardInfo;



