import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import Wishlist from './Wishlist'

export default function Items({ item, handleClick }) {
  const {id, proImgUrl, proName, proPrice} = item

  return (
    <div id="fur">
            <div id='big-box'>
                <img src={proImgUrl} width={200} />
                <p>{proName}</p>
                <p>${proPrice}</p>

                <div className="proBtn">
                    <button value={id} onClick={(e)=>handleClick(e.target.value)}>Add to Wishlist</button>
                    <button> 
                        <Link to="/description">Know More</Link>
                    </button>
                </div>
            </div>
    </div>
    
    // <div id="fur">
    //     <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" width={200} alt="" />
    //     <p>Recliner Set - SOFA</p>
    //     <p>$200</p> 
    //     <div className="proBtn">
    //         <button onClick={changeState}>Add to Wishlist</button>
    //         {/* <button onClick={() => setButtonPopup(true)}>Know More</button> */}
    //         <button> 
    //             <Link to="/description">Know More</Link>
    //         </button>
    //         {/* <ProDesc trigger={buttonPopup} setTrigger={setButtonPopup}>
    //             <h3>Popup</h3>
    //         </ProDesc> */}
    //     </div> 
    //     <Wishlist data={state.data} />
    // </div>
  )
} 