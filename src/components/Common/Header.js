import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {authenticate} from '../../actions';

class HEADER extends Component {

    authButton = () => {
      if(this.props.auth){
        return <button onClick={() => this.props.authenticate(false)}>Sign Out</button>
      }
      else return <button onClick={() => this.props.authenticate(true)}>Sign in</button>
    }
    render() {
        return (
            <nav className="HEADER">
              <ul>

                <li><Link to='/'>Home</Link></li>
                <li><Link to='/resources'>Resources</Link></li>
                <li><Link to='/setting'>Setting</Link></li>
                <li>{this.authButton()}</li>
              </ul>
            </nav>
        );
    }
}

function mapStateToProps({auth}) {
  return{auth}
}

export default connect(mapStateToProps,{authenticate})(HEADER)
