import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiFillAndroid } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { GiIndiaGate } from "react-icons/gi";

export default function Navbar() {
    return (
        <div id="NavBar">
            <div id="TopNav">
                <div id="contactTop">
                    <div id="phone">
                        <FaPhoneAlt />
                        <p>+91 888XXXX89</p>
                    </div>
                    <div id="mail">
                        <MdOutlineMailOutline />
                        <p>tandonkartikey11@gmail.com</p>
                    </div>
                </div>
                <div id="TopInfo">
                    <p className='track'>Offers</p>
                    <p className='track'>Track Order</p>
                    <div id="appInfo">
                        <AiFillAndroid />
                        <p>Download App</p>
                    </div>
                </div>
            </div>
            <div id="BottomNav">
                <div id="logo">
                    <a href="">Shopix.io</a>
                </div>
                <div id="searchBar">
                    <div id='searchImg'><CiSearch /></div>
                    <input type="text" id="searchIt" placeholder='search products or services' />
                </div>
                <div id="right">
                    <div id="india">
                        <GiIndiaGate />
                        <p>Made in India</p>
                    </div>
                    <div id="login">
                        {/* <a href="#">Login</a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}