import React, { useState } from 'react'
import Items from './Items'
import proData from './ProData'

export default function Product() {

  const [cart, setCart] = useState([])

  const handleClick = (item) => {
    // if(cart.indexOf(item) !== -1) {
    //   return;
    // }
    setCart([...cart, item])
    localStorage.setItem('wish', JSON.stringify(cart))
    console.log(cart);
  }

  return (
    <div id="fur">
      {proData.map((item) => (
        <Items key={item.id} item={item} handleClick={handleClick} />
      ))}
    </div>
  )
} 