import React from "react"
import "./Videobox.css"
import Suggestion from "./Suggestion";
class Videobox extends React.Component{
    render(){
        return(
            <div className="Videobox">
                  <div className="videoDisplay">
                                <div className="video">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/X81YJldQu2I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div className="description">
                                    <h4>Video Title</h4>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    </p>
                                </div>
                                <div className="assignments">
                                    Stuff Related to Questions / Assignments
                                </div>
                              
                  </div>
                  <div className="Sidebar">
                          <h4>Course Content</h4>
                          <div className="list">
                               <Suggestion/>
                               <Suggestion/>
                               <Suggestion/>  
                          </div>
                  </div>
            </div>
        )
    }
}
export default Videobox;