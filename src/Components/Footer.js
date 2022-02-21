import React from "react"
import "./Footer.css"
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
class Footer extends React.Component{
    render(){
        return(
            <div className="Footer">
                <div className="Instagram icon_hover">
                   <FaInstagram className="footerIcons"/>  Instagram
                </div>
                <div className="Facebook icon_hover">
                   <FaFacebook className="footerIcons"/>  Facebook
                </div>
                <div className="Twitter icon_hover">
                   <FaTwitter className="footerIcons"/>  Twitter
                </div>
                <div className="Youtube icon_hover">
                   <FaYoutube className="footerIcons"/>  Youtube
                </div>
            </div>
        )
    }
}
export default Footer;