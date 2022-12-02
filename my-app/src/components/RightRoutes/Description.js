import React from 'react'
import { Link } from 'react-router-dom'

export default function Description() {
  return (
    <div className="description">
        <div id="fur">
          <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" width={300} alt="" /> 
        </div>
        <div id="desc">
          <h2>Home Recliner</h2>
          <div className="about">
            <p id="about-head">About</p>
            <p>A Relaxing Sofa made of pure Mexican Wood with the embedded cushions.</p>
          </div>
          <div id="otherDetails">
            <p>Price - $200 Only</p>
          </div>
          <div id="descBtn">
            <button>Buy Now</button>
            <button>Add to Wishlist</button>
          </div>
          <button className='btnn'>
            <Link to='/products'>Return Back to Product Section</Link>
          </button>
        </div>
    </div>
  )
}
