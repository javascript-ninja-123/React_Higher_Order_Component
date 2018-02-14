import React,{Component} from 'react';

const offStyle={backgroundColor:'red'}
const onStyle = {backgroundColor:'green'}


class ERRORBOUNDARIES extends Component {
  state = {hasError:false};
  componentDidCatch(error,info){
    this.setState({...this.state, hasError:true})
  }
  render(){
    const {hasError} = this.state;
    if(hasError){
      return <div>Sorry we failed you</div>
    }else{
      return (
        <div>
        {this.props.children}
        </div>
      )
    }
  }
}


class SWITCH extends Component {

    state = {on:false}
     toggle = async () => {
         await this.setState({on:!this.state.on})
         alert(this.state.on)
    }


    toggleContext = () => {
      const text = this.state.on ? this.props.onText : this.props.offText;
      return <p>{text}</p>
    }

    render() {
        const {on} = this.state;
          return (
              <div className="SWITCH">
                  {this.toggleContext()}
                  <ERRORBOUNDARIES>
                  <button
                  style={on ? onStyle : offStyle}
                  onClick={this.toggle}
                  >toggle </button>
                  </ERRORBOUNDARIES>
              </div>
          );

    }
}

export default SWITCH;
