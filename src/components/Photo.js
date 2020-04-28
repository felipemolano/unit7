import React from 'react';



class Photo extends React.Component{



    render()
    {
        return(
            <li>
                <img  src={this.props.url} alt="not found"     />
            </li>
        );
    }
}

export default Photo;