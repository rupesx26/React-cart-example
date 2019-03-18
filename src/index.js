import React, {Component} from "react";
import ReactDOM from "react-dom";
import Cart from "./containers/Cart";
import './public/component.less'
// import "./styles.css";
class App extends Component {
  render() {
    return (
        <div className="page-wrapper">
            <Cart />
        </div>
    )
  }
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);