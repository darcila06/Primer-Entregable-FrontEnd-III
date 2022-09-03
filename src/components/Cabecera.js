import React from 'react'

const Cabecera =({compra}) => {
  
  return (
    <header>
        <h1>Carrito de Compras</h1>
        <p>cantidad de productos: <span>{compra}</span></p>
    </header>
  )
}

export default Cabecera;