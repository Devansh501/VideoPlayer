import React from "react"
import "./Navbar.css"
import { FaBars } from "react-icons/fa";
import { IoSearchCircleOutline } from "react-icons/io5";
import {IoNotificationsCircleOutline} from "react-icons/io5";
import {CgProfile  } from "react-icons/cg";
class Navbar extends React.Component{
    render(){
        return(
            <div className="Navbar">
                
                <input type="checkbox" id="check"></input>
                <label for="check" className="checkbtn">
                     <FaBars/>
                </label>
                <label className="Logo">DesignX</label>
                <div className="buttons">
                   
                    <div className="icons circular"><IoNotificationsCircleOutline/></div>
                    <div className="icons "><CgProfile/></div>
                </div>
                <ul>
                    <li><a href="#">Global Discussion</a></li>
                    <li><a href="#">Assignments</a></li>
                    <li><a href="#">Tests</a></li>
                    <li ><input type="text" placeholder=" Search " id="searchArea"></input></li>
                    
                </ul>
            </div>
        )
    }
}
export default Navbar;