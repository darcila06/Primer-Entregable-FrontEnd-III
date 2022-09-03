import React from 'react'
import data from './data.json'
import Item from './Item'
// El componente Listado es el padre de:
// - varios Item
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.

const Listado = ({funcion}) => {
  return (
    <div className='container'>
      {
        data.map((item) => <Item key={item.id} producto={item.producto} stock={item.stock} actualizar={funcion} />)
      }
    </div>
  )
}

export default Listado;