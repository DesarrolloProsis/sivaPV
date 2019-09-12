import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardInfo from "../Components/CardInfo/CardInfo";
import Col from 'react-bootstrap/Col';
import CardModule from "../Components/CardModule/CardModule";

class Modulo extends React.Component {

    render() {
        return (
            <Container  className="py-5">
                <Row className="py-5">
                    <Col xl={3} lg={3} md={12} sm={12} xs={12}>
                        <CardInfo></CardInfo>
                    </Col>
                    <Col xl={9} lg={9} md={12} sm={12} xs={12}>
                        <CardModule></CardModule>
                    </Col>
                </Row>
            </Container>

        )
    }
}
export default Modulo;