import React, { Component } from 'react'

class Mobile extends Component {
      constructor(props) {
            super(props);
            this.state = {  }
      }
      render() { 
            console.log(this.props.mobile)
             return this.props.images ? (
            <div className="container">
                  <div className="row">
                               {this.props.images.map(image => <div key={image.id} className={this.props.mobile ? "col-12" :"col-6"}>
                        <div className="card" >
                              <img  src={image.url} className="card-img-top" alt={image.title} />
                        </div>
                  </div>)
                  }
                  </div>
            </div> ): (<div>Loading...</div>)
      }
}
 
export default Mobile;