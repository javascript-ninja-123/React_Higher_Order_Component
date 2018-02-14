import React,{Component} from 'react';







export default (baseComponent) => {
  class HIGHER extends Component {

     render() {
         return (
            <baseComponent {...this.props}/>
         );
     }
 }
 return HIGHER
}
