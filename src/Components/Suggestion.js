import React from "react"
import "./Suggestion.css"
import { GiOpenFolder } from "react-icons/gi";
class Suggestion extends React.Component{
    render(){
        return(
            <div className="Suggestion">
                    <div className="image">
                           <img src="https://images.idgesg.net/images/article/2019/08/cso_nw_promoting_an_idea_lightbulb_technology_gear_by_natali_mis_gettyimages-1024234886_2400x1600-100808095-large.jpg" alt="van"/>
                    </div>
                    <div className="details">
                        <div className="title">
                            <h6>Video Title</h6>
                           
                             <GiOpenFolder className="folder_icon"/>
                        </div>
                        <div className="data">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 

                        </div>
                    </div>
            </div>
        )
    }
}
export default Suggestion;