import React from 'react'
import proData from './ProData';
import { useState } from 'react';

export default function Wishlist() {
  const [camrt, setCamrt] = useState([]);

  let x = localStorage.getItem('wish')

  console.log(x)

  let total = 0;

  return (
    <>
        {proData.map((data, key) => {
            if(x.includes(data.id)) {
                camrt.push(data.id)
                total = parseInt(total) + parseInt(data.proPrice)
                return (
                    // <div className='wish'>
                        <div className='wish-box' key={key}>
                            <img src={data.proImgUrl} width={80} />
                            <p>{data.proName}</p>
                            <p>${data.proPrice}</p>
                            {/* <button className='btnn'>Buy Now</button> */}
                        </div>
                    // </div> 
                )
            }
        })}
        <div className='wish-foot'>
            {/* <p id='total-price'>Grand Total: </p> */}
            <p>Cart Total: ${total}</p>
        </div>
    </>
  )
}



// return (
                //     <div className='big-box' key={key}>
                //         <img src={data.proImgUrl} width={200} />
                //         <p>{data.proName}</p>
                //         <p>${data.proPrice}</p>
                //     </div>  
                // )