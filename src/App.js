import React from "react";
import Main from "./Routes/Main";
import Nav from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
class App extends React.Component {

    render() {
        return (
            <div>
                <Nav></Nav>
                <Main></Main>
                <Footer></Footer>
            </div>
        )
    }
}
export default App;
