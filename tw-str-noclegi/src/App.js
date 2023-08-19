import { Component } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Hotels from "./components/Hotels/Hotels";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { hotels: ["NIE SKOŃCZONE"] };
  }
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Hotels />
      </div>
    );
  }
}

export default App;
