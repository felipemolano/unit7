import React from 'react';
import Photo from "./Photo";



class PhotoList extends React.Component{

render(){


    let results = this.props.photos.map(
        
        
        
        z => 
        <Photo
              url={`https://farm${z.farm}.staticflickr.com/${z.server}/${z.id}_${z.secret}.jpg`} key={z.id}

        />
        
        
        );

    
    return(
        <div className="photo-container">

            <h2>Results</h2>
            <ul>
                {results}
            </ul>

        </div>
    );
}


}

export default PhotoList;