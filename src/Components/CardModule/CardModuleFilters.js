import React from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import "./CardModuleFilters.css";
/* DatePicker */
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import es from 'date-fns/locale/es';
registerLocale('es', es)


class CardModuleFilters extends React.Component {
    state = {
        startDate: new Date()
    };
    handleChange = date => {
        this.setState({
            startDate: date
        });
    };
    render() {
        return (
            <Card.Header>
                <Row>
                    <Col xl={3} lg={6} md={6} sm={6} xs={12}>
                        <p className="filter-text">Cuentas:</p>
                        <Dropdown>
                            <Dropdown.Toggle className="btn-block btn-filter" size="sm" id="dropdown-basic" >Seleccionar</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col xl={3} lg={6} md={6} sm={6} xs={12}>
                    <p className="filter-text">Tags:</p>
                        <Dropdown>
                            <Dropdown.Toggle className="btn-block btn-filter" size="sm" id="dropdown-basic">Seleccionar</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col xl={3} lg={6} md={6} sm={6} xs={12}>
                    <p className="filter-text">Fecha Inicio:</p>
                        <DatePicker className="dp-filter" locale="es" selected={this.state.startDate} onChange={this.handleChange} withPortal dateFormat="dd/MM/yyyy"></DatePicker>
                    </Col>
                    <Col xl={3} lg={6} md={6} sm={6} xs={12}>
                    <p className="filter-text">Fecha Fin:</p>
                        <DatePicker className="dp-filter" locale="es" selected={this.state.startDate} onChange={this.handleChange} withPortal dateFormat="dd/MM/yyyy"></DatePicker>
                    </Col>
                </Row>
            </Card.Header>
        )
    }
}
export default CardModuleFilters;