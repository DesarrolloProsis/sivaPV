import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardInfo from "../Components/CardInfo/CardInfo";
import Col from 'react-bootstrap/Col';
import CardModule from "../Components/CardModule/CardModule";
// import axios from "axios";
import Cookies from 'universal-cookie';
class Modulo extends React.Component {
    componentDidMount() {
        
        const cookieget = new Cookies();
        console.log(`${cookieget.get('token')}`)
        // var axiosconfig = {
        //     headers: {
        //         'Authorization': `Bearer ${cookieget.get('token')}`,
        //     }
        // }
        // axios.post("http://192.168.0.71:8081/api/clients/190612881604", axiosconfig)
        //     .then((res) => {
        //         this.setState({
        //             token: res.data.token,
        //             numCliente: res.data

        //         })
        //         const cookies = new Cookies();
        //         cookies.set('token', this.state.token);
        //         this.props.history.push("/inicio");
        //     })
        //     .catch((err) => {
        //         console.log("REQUEST ERROR: ", err);
        //         this.setState({
        //             error: true
        //         })
        //     });
    }

    render() {
        return (
            <Container className="py-5">
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