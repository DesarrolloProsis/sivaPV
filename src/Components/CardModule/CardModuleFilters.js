import React from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TableUser from "../TableUser/TableUser";
import "./CardModuleFilters.css";
import axios from "axios";
import Cookies from 'universal-cookie';
/* DatePicker */
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import es from 'date-fns/locale/es';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import CardInfo from "../CardInfo/CardInfo";
import * as moment from 'moment'
registerLocale('es', es)


class CardModuleFilters extends React.Component {
    state = {
        startDate: new Date(),
        endDate: new Date(),
        tags: [],
        cuenta: "",
        tag: "",
        idcuenta: "",
        movimientos: ""
    };
    //cambio de fecha fin
    handleChangeEndDate = date => {
        this.setState({
            endDate: date
        });
    }
    //handle cambio de fecha inicio
    handleChange = date => {
        this.setState({
            startDate: date
        });
    }

    //handle cambio de dropdown cuentas
    handleDropdownChange = event => {
        //.target cambia a currentTarget para compatibilidad con FireFox
        if (event) {
            const selectedIndex = event.currentTarget.options.selectedIndex;
            // console.log(event.target.options[selectedIndex].getAttribute('data-key'))
            var idCuentaCliente = event.currentTarget.options[selectedIndex].getAttribute('data-key')
            this.state.tags.length = 0;
            this.setState({
                cuenta: event.currentTarget.value,
                idcuenta: idCuentaCliente
            })
        }

        // console.log(event.currentTarget.dataset.tag)
        this.fillTags(event.target.value)
    }


    //Handle change de dropwdon tags
    handleDropdownChangeTag = event => {
        this.setState({
            tag: event.target.value,

        })
    }



    // Filtro de tags para dropdown dependiento seleccion
    fillTags = (cuenta) => {

        this.props.tags.forEach(element => {
            if (element.cuentaId === cuenta) {
                var newStateArray = this.state.tags;
                newStateArray.push(element.numTag);
                this.setState({ tags: newStateArray });
            }
        });
    }

    // Llenado de tabla para pasar mediante props
    fillData = () => {
        const cookieget = new Cookies();
        var token = `${cookieget.get('token')}`
        var config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        let idCuenta = this.state.idcuenta;
        let cuenta = this.state.cuenta;
        let tag = this.state.tag;
        let startDate = moment(this.state.startDate).format('DD-MM-YYYY')
        let endDate = moment(this.state.endDate).format('DD-MM-YYYY')
        // console.log(idCuenta)
        // console.log(tag)
        // console.log(cuenta)
        // console.log(startDate)
        // console.log(endDate)
        if (cuenta !== "" && tag === "" && startDate !== "" && endDate !== "") {

            axios.get(`http://192.168.0.71:8081/api/clients/movimientosCuenta/${idCuenta}/${cuenta}/${startDate}/${endDate}`, config)
                .then(res => {
                    this.setState({
                        movimientos: res.data.listTransaccion
                    })
                })
                .catch(err => {
                    console.log("AXIOS ERROR", err)
                    this.setState({
                        movimientos:false
                    })
                })
        } else if (idCuenta !== "" && cuenta !== "" && tag !== "" && startDate !== "" && endDate !== "") {
            axios.get(`http://192.168.0.71:8081/api/clients/movimientosTag/${cuenta}/${tag}/${startDate}/${endDate}`, config)
                .then(res => {
                    this.setState({
                        movimientos: res.data.listTransaccion

                    })
                })
                .catch(err => {
                    console.log("AXIOS ERROR", err)
                    this.setState({
                        movimientos:false
                    })
                })
        } else {
            console.log("CONSULTA INVALIDA")
        }

    }
    render() {

        return (
            <div>
                <Row className="py-5">
                    <Col xl={3} lg={3} md={12} sm={12} xs={12}>
                        <CardInfo cuenta={this.state.cuenta} tag={this.state.tag}></CardInfo>
                    </Col>
                    <Col xl={9} lg={9} md={12} sm={12} xs={12}>
                        <Card.Header className="header">MOVIMIENTOS</Card.Header>
                        <Card.Header >

                            <Row>
                                <Col xl={3} lg={6} md={6} sm={6} xs={12}>
                                    <p className="filter-text">Cuentas:</p>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Control as="select" onClick={this.handleDropdownChange}>
                                            <option defaultValue="" data-key="" value="" >No seleccionado</option>
                                            {this.props.cuentas.map((cuenta, id) => {
                                                return (
                                                    <option value={cuenta[1]} key={id} data-key={cuenta[0]}>{cuenta[1]}</option>
                                                )
                                            })}

                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col xl={3} lg={6} md={6} sm={6} xs={12}>
                                    <p className="filter-text">Tags:</p>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Control as="select" onClick={this.handleDropdownChangeTag}>
                                            <option defaultValue="" value="">No seleccionado</option>
                                            {this.state.tags.map((tag, id) => {
                                                return (
                                                    <option value={tag} key={id}>{tag}</option>
                                                )
                                            })}
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col xl={2} lg={6} md={6} sm={6} xs={12}>
                                    <p className="filter-text">Fecha Inicio:</p>
                                    <DatePicker className="dp-filter" locale="es" selected={this.state.startDate} onChange={this.handleChange} withPortal dateFormat="dd/MM/yyyy"></DatePicker>
                                </Col>
                                <Col xl={2} lg={6} md={6} sm={6} xs={12}>
                                    <p className="filter-text">Fecha Fin:</p>
                                    <DatePicker className="dp-filter" locale="es" selected={this.state.endDate} onChange={this.handleChangeEndDate} withPortal dateFormat="dd/MM/yyyy"></DatePicker>
                                </Col>
                                <Col xl={2} lg={6} md={6} sm={6} xs={12}>
                                    <Button className="button-buscar" onClick={this.fillData}>Buscar</Button>
                                </Col>
                            </Row>
                        </Card.Header >
                        <TableUser datos={this.state.movimientos}></TableUser>
                    </Col>
                </Row>
            </div>

        )
    }
}
export default CardModuleFilters;
