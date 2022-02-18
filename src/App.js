import React, { Component } from "react";
import "./styles.css";

export default class app extends Component {
  state = {
    resultado: 0,
    n1: null,
    n2: null,
    s: ""
  };

  handleChange = (e) => {
    this.setState({
      n1: e.target.value
    });
  };

  handleChange2 = (e) => {
    this.setState({
      n2: e.target.value
    });
  };

  add = () => {
    let { n1, n2 } = this.state;

    if (n1 && n2 !== "") {
      this.setState({
        resultado: Number(n1) + Number(n2),
        s: "+"
      });
    } else {
      this.setState({
        resulto: "Nenhum valor foi digitado"
      });
    }
  };

  menos = () => {
    let { n1, n2 } = this.state;
    this.setState({
      resultado: Number(n1) - Number(n2),
      s: "-"
    });
  };
  mult = () => {
    let { n1, n2 } = this.state;
    this.setState({
      resultado: Number(n1) * Number(n2),
      s: "*"
    });
  };
  div = () => {
    let { n1, n2 } = this.state;
    this.setState({
      resultado: Number(n1) / Number(n2),
      s: "/"
    });
  };

  clear = () => {
    let { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        resultado: 0,
        n1: "",
        n2: ""
      });
    } else {
      this.setState({
        resultato: "Nenhum valor foi digitado"
      });
    }
  };

  render({ add, menos, mult, div, clear } = this) {
    return (
      <div className="conteiner">
        <h1>React Calculadora</h1>
        <h2>{this.state.resultado}</h2>
        <div className="input">
          <input
            onChange={this.handleChange}
            type="number"
            value={this.state.n1}
          />
          <h2>{this.state.s}</h2>
          <input
            onChange={this.handleChange2}
            type="number"
            value={this.state.n2}
          />
        </div>
        <div className="button">
          <button onClick={add}>+</button>
          <button onClick={menos}>-</button>
          <button onClick={mult}>*</button>
          <button onClick={div}>/</button>
          <button onClick={clear}>Limpar</button>
        </div>
      </div>
    );
  }
}

// clear = ()=>{
//   let {num1, num2} = this.state
//   if(num1 && num2 !== ""){
//     this.setState({
//       result: null,
//       num1:" ",
//       num2:" "
//     })
//   }else{
//     this.setState({
//       result: "Nenhum valor foi digitado"
//     })
//   }
// }
