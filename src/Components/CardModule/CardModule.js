import React from "react";
import Card from 'react-bootstrap/Card';
import CardModuleFilters from "./CardModuleFilters";
import TableUser from "../TableUser/TableUser";
import { ReactComponent as Imprimir } from './24px.svg';
import "./CardModule.css";

class CardModule extends React.Component {
    render() {
        return (
            <Card>
                <Card.Header className="header">MOVIMIENTOS<Imprimir className="imp-style"></Imprimir></Card.Header>
                <CardModuleFilters></CardModuleFilters>
                <TableUser></TableUser>
            </Card>
        )
    }
}
export default CardModule;