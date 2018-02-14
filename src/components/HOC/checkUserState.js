import React,{Component} from 'react';
import {connect} from 'react-redux';

export default (BaseComponent) => {
   class CheckStatus extends Component {
      componentDidMount() {
        if(!status){
          console.log('nononono')
        }
      }
      render() {
          return (
              <BaseComponent {...this.props}/>
          );
      }
  }

  function mapStateToProps({status}) {
    return{status}
  }

  return connect(mapStateToProps)(CheckStatus)
}
