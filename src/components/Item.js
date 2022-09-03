import React from "react";
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")


export default class Item extends React.Component{
  
  constructor(props){
    super(props)

    this.state ={
      stock: this.props.stock
      
    }
    this.actualizarStock = this.actualizarStock.bind(this);
  }
  
  actualizarStock = (actualizar) => {
      this.setState({
        stock: this.state.stock-1,
      });
      this.props.actualizar()
      console.log(this.state.stock);
    if (this.state.stock-1===0){
      this.setState({
        stock: 'Agotado'
      });
    }
  }
  render (){
    let cantidad
    if(this.state.stock==='Agotado'){
      cantidad = <h5>En stock: <span>{this.state.stock}</span></h5>
    }else{
      cantidad = <h5>En stock: {this.state.stock}</h5>
    }
  return (
    <div className='producto'>
      <h3>{this.props.producto.nombre}</h3>
      <p>{this.props.producto.descripcion}</p>
      {cantidad}
      <button disabled = {this.state.stock==='Agotado'} onClick={this.actualizarStock}>COMPRAR</button>
    </div>
  )}
}
