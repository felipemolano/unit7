// import components
import React from 'react';
import Search from "./components/Search";
import Navi from "./components/Navi";
import PhotoList from "./components/PhotoList";
import NotFound from "./components/NotFound";



import "./config.js";
import './css/index.css';
import apiKey from './config.js';

//import react router dom
import {
  BrowserRouter,
  Switch,
  Route
  
} from "react-router-dom";



//import axios
import axios from 'axios';

// declare the 3 default categories for the navs links
const category1 = "dogs";
const category2 = "anime";
const category3 = "football";


class  App extends React.Component {





// here my states 
constructor() {
  super();
  this.state = {
    search: [],
    word: "",
    topic1: [],
    topic2: [],
    topic3: [],
    searchChanged : false
  }
} 


// call the Arrayfiller function to fill each default category
componentDidMount () {

 

  this.ArrayFiller(category1,"topic1");
  this.ArrayFiller(category2,"topic2");
  this.ArrayFiller(category3,"topic3");







        




}


// ArrayFiller function 
ArrayFiller = (category,element) => {

  
  axios(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${category}&per_page=16&format=json&nojsoncallback=1&content_type=1`)
  .then(responseData => {
    if(element === "topic1"){
    this.setState({topic1: responseData.data.photos.photo});
    }else if(element ==="topic2"){
      this.setState({topic2: responseData.data.photos.photo});
    }
  
    else{
      this.setState({topic3: responseData.data.photos.photo})
    }
    
  })

  .catch(error => {
    console.log("error fectching and parsing data",error);
  });



}


UpdateSearch = (text) =>{

  this.setState({word: text});
  this.setState({searchChanged: true});
  axios(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${text}&per_page=16&format=json&nojsoncallback=1&content_type=1`)
  .then(responseData => {
    
    this.setState({search: responseData.data.photos.photo});
    
    
    
  })

  .catch(error => {
    console.log("error fectching and parsing data",error);
  });


   
}

  render(){
      return (
        


        <BrowserRouter>

      
        <div className="container">
      
              <Search searchThis = {this.UpdateSearch}/>
              <Navi/>
              <Switch>
                
                
                
                
                <Route exact path ="/cars"         render={ () => <PhotoList  photos={this.state.topic1}  />} />
                <Route exact path ="/anime"        render={ () => <PhotoList  photos={this.state.topic2}  />} />
                <Route exact path ="/football"     render={ () => <PhotoList  photos={this.state.topic3}  />} />
                <Route exact path ="/search/:word" render={ () => <PhotoList  photos={this.state.search}    />} /> 
                <Route                          component={NotFound}                                          />
                
                
                
                
              </Switch>
              
        </div>



        

       

        </BrowserRouter>
      );
    }


}

export default App;
