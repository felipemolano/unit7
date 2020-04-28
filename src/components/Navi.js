import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";




class Navi extends React.Component{

render(){
    return(

        <nav className="main-nav">
            <ul>
                
                
                <li> <NavLink to = "/cars">Cars</NavLink></li>
                <li> <NavLink to = "/anime">Anime</NavLink></li>
                <li> <NavLink to = "/football">Fotball</NavLink></li>
                
            </ul>
        </nav>
    );
}


}

export default Navi;