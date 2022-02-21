import React from "react"
import "./Subnav.css"
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
class Subnav extends React.Component{
    render(){
        return(
            <nav className="Subnav">
                <IoChevronBackCircleOutline className="backBtn"/>
                <UncontrolledDropdown>
      <DropdownToggle caret className="px-1 py-1 dropBtn mx-2">
        Subjects
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem className="links"><a href="#">Biology</a></DropdownItem>
        <DropdownItem className="links"><a href="#">Chemistry</a></DropdownItem>
        <DropdownItem className="links"><a href="#">Physics</a></DropdownItem>
        <DropdownItem className="links"><a href="#">Maths</a></DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
         <div className="path mx-2">
             Computer / Chapter Name / Video title
         </div>
            </nav>
        )
    }
}
export default Subnav;