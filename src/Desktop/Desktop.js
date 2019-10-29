import React, { Component } from 'react';
import { Gallery, GalleryImage } from "react-gesture-gallery";


class DeskTop extends Component {
      constructor(props) {
            super(props);
            
            this.state = { 
                  index : 0
             }
      }
      render() { 
            
            return this.props.images ? (
                  <Gallery
                        style={{
                              background: "black",
                              height: "100vh",
                              width: "100vw"
                        }}
                        index={this.state.index}
                        onRequestChange={i => {
                              this.setState({
                                    index: i
                              } )
                              //setIndex(i);
                        }}
                  >
                        {this.props.images.map(image => (
                              <GalleryImage objectFit="contain" key={image.id} src={image.url} />
                        ))}
                  </Gallery>
            ): (<div>loading...</div>)
      }
}

 
export default DeskTop;