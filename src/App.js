import React from "react";
import Main from "./Routes/Main";
import Nav from "./Components/Navbar/Navbar";
class App extends React.Component {

    render() {
        return (
            <div>
                <Nav></Nav>
                <Main></Main>
            </div>
        )
    }
}
export default App;
