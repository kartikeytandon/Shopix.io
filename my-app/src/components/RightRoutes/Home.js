import ControlledCarousel from './ControlledCarousel'
import { FaWhatsapp } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";

export default function Home() {
  return (
    // <ControlledCarousel />
    <div className="home">
      <div className="homeHead">
        <h1>Welcome to <span>Shopix.io</span></h1>
        <p>The only place for the Wood</p>
      </div>
      <div className="homeImg">
        <img src="https://previews.123rf.com/images/bialasiewicz/bialasiewicz1805/bialasiewicz180501212/104834726-header-of-a-bright-bedroom-interior-with-large-window-and-white-furniture.jpg" width={650} alt="" />
      </div>
      {/* <div className="socials">
        ----
        <FaWhatsapp />
        <AiFillFacebook />
        ----
      </div> */}
    </div>
  )
}
