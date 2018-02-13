import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {navigation} from '../../actions';

export default (ComposedComponent) => {
  class Authentication extends Component{
    componentDidMount() {
      if(!this.props.auth){
          this.props.navigation('/')
      }
    }
    componentWillUpdate(nextProps, nextState) {
      if(!nextProps.auth){
        this.props.navigation('/')
      }
    }
    render(){
      return <ComposedComponent {...this.props}/>
    }
  }

  function mapStateToProps({auth}) {
    return{auth}
  }

  return connect(mapStateToProps,{navigation})(Authentication)
}
