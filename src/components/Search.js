import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

class Search extends React.Component{
state={

    Query: ""
}

ChangeText = (e) =>{

    this.setState({Query : e.target.value});
    
}


handleSubmit = e => {
    e.preventDefault();
    this.props.searchThis(this.state.Query);
    
    e.currentTarget.reset();
  }


render(){
    return(
        <form className="search-form" onSubmit = {this.handleSubmit}>
            <input
            
                type="search"
                placeholder="search..."
                onChange = {this.ChangeText}
               
                
            
            /> 
            <button className="search-button" ><svg  width="24" height="24" fill="fff"></svg>  </button>
            <i className="fas fa-search"></i>
        </form>
    );
}



}

export default Search;