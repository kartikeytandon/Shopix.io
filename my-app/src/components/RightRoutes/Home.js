// import ControlledCarousel from './ControlledCarousel'
// import { FaWhatsapp } from "react-icons/fa";
// import { AiFillFacebook } from "react-icons/ai";

// export default function Home() {
//   return (
//     // <ControlledCarousel />
//     <div className="home">
//       <div className="homeHead">
//         <h1>Welcome to <span>Shopix.io</span></h1>
//         <p>The only place for the Wood</p>
//       </div>
//       <div className="homeImg">
//         <img src="https://previews.123rf.com/images/bialasiewicz/bialasiewicz1805/bialasiewicz180501212/104834726-header-of-a-bright-bedroom-interior-with-large-window-and-white-furniture.jpg" width={650} alt="" />
//       </div>
//       {/* <div className="socials">
//         ----
//         <FaWhatsapp />
//         <AiFillFacebook />
//         ----
//       </div> */}
//     </div>
//   )
// }




import React from "react";
export default function Home() {
  return (
    <div className="HomeComp ScrollComp">
      {/* Home asdj; */}
      <div className="dj-home">
        <section id="products">
          <div className="container">
            <div className="products-header">
              <h2>Welcome to shopix.io</h2>
              <p>
                Browse Products upto 50% Discount this Christmas
              </p>
            </div>
            <div className="product product-1">
              <figure>
                {" "}
                <img
                  src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412551/E-commerce%20landing%20page/products-showcase/product-1-img_3x.jpg"
                  alt="product-image"
                />
                <figcaption>cold fashion</figcaption>
                <figcaption>$ 56.00</figcaption>
              </figure>
            </div>
            <div className="product product-2">
              <figure>
                {" "}
                <img
                  src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412546/E-commerce%20landing%20page/products-showcase/product-2-img_3x.jpg"
                  alt="product-image"
                />
                <figcaption>women fashion</figcaption>
                <figcaption>$ 84.00</figcaption>
              </figure>
            </div>
            <div className="product product-3">
              <figure>
                {" "}
                <img
                  src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412550/E-commerce%20landing%20page/products-showcase/product-3-img_3x.jpg"
                  alt="product-image"
                />
                <figcaption>women fashion</figcaption>
                <figcaption>$ 48.00</figcaption>
              </figure>
            </div>
            <div className="product product-4">
              <figure>
                {" "}
                <img
                  src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412550/E-commerce%20landing%20page/products-showcase/product-4-img_3x.jpg"
                  alt="product-image"
                />
                <figcaption>men fashion</figcaption>
                <figcaption>$ 89.00</figcaption>
              </figure>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
