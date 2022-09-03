import React, { useState } from 'react'
import Cabecera from './components/Cabecera'
import Listado from './components/Listado'
// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

export default class App extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      canasta: 0
    }
    this.actualizarCanasta = this.actualizarCanasta.bind(this);
  }

  actualizarCanasta = () => {
    this.setState({
      canasta: this.state.canasta+1
    });
  }

  render(){
  return (
    <div className="App">
      <Cabecera compra={this.state.canasta}/>
      <Listado funcion={this.actualizarCanasta}/>
    </div>
  );}
};

