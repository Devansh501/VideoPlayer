import React from "react"
import "./Main.css"
import Subnav from "./Subnav";
import Videobox from "./Videobox";
class Main extends React.Component{
    render(){
        return(
            <div className="Main">
                
                 <div className="contentBox">
                     <Subnav/>
                     <Videobox/>
                 </div>
            </div>
        )
    }
}
export default Main;