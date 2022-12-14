import React from 'react'
import proData from './ProData';
import { useState } from 'react';

export default function Wishlist() {
  const [camrt, setCamrt] = useState([]);

  let x = localStorage.getItem('wish')

  console.log(x)




  return (
    <>
        {proData.map((data, key) => {
            if(x.includes(data.id)) {
                camrt.push(data.id)
                return (
                    // <div className='fur'>
                        <div className='big-box wish-box' key={key}>
                            <img src={data.proImgUrl} width={200} />
                            <p>{data.proName}</p>
                            <p>${data.proPrice}</p>
                            <button className='btnn'>Buy Now</button>
                        </div>
                    // </div> 
                )
            }
        })}
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