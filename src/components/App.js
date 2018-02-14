import React,{Component} from 'react';
import SWITCH from './Switch/Switch'
import SELECT from './Select/Select';
import SELECTEDPOSTLIST from './Select/Selected_post'


const neverRender = (BaseComponent) => {
  class OVERRIDE extends Component{
    shouldComponentUpdate(nextProps, nextState) {
      return false;
    }
    render(){
      return(
        <BaseComponent {...this.props}/>
      )
    }
  }
  return OVERRIDE
}

const overRide = (OverRideProps) => (BaseComponent) => (props) =>
<BaseComponent {...props} {...OverRideProps}/>






const User = ({name}) => {
  return <div className='User'>{name}</div>
}

const alwaysSung = overRide({name:'Sung'})
const User3 = alwaysSung(User)


const User2 = neverRender(User)




 class APP extends Component {

    render() {
        return (
            <div className="class-name">
                HOME THIS IS A HOME
                <User name='man'/>
                <User2 name='hellyeah'/>
                <User3 name='mina'/>
                <SWITCH onText='The button is on' offText='The button is off'/>
                <SELECT/>
                <SELECTEDPOSTLIST/>
            </div>
        );
    }
}

export default APP
