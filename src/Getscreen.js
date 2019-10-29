import React, { Component } from 'react';
import { withGetScreen } from 'react-getscreen'
import Mobile from './Mobile/Mobile'
import Desktop from './Desktop/Desktop'

class Getscreen extends Component {
      constructor(props) {
            super(props);
            this.state = {  }
      }
      render() { 
            if (this.props.isMobile()) return <Mobile images={this.props.images} mobile/>;
            if (this.props.isTablet()) return <Mobile images={this.props.images}/>;
            return <Desktop images={this.props.images}/>;
      }
}
 
export default withGetScreen(Getscreen);