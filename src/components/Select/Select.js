import React,{Component} from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import {connect} from 'react-redux';
import {selectPost,deselectPost,fetchPost} from '../../actions';

const newArray = [
  {text:'do this'},
  {text:'do that'},
  {text:'maybe'},
  {text:'Hell Yeah'},
  {text:'hope so'}
]


const checkAxiosCall = (array,fn) => {
  if(array === undefined || array.length <=0){
    return 'wait'
  }else{
    return fn()
  }
}


class SELECT extends Component {

  componentDidMount() {
    this.props.fetchPost();
  }

    onChange = (e,data) => {
      data.checked ?   this.props.selectPost(data.value.id) :   this.props.deselectPost(data.value.id)
    }

    SelectFn = () => {
              return this.props.posts[0].map((value,id) => {
                return(
                  <Form.Field key={id}>
                   <Checkbox
                    label={value.name}
                    value={{...value,id:value.id}}
                    onChange={this.onChange}
                    />
                  </Form.Field>
                )
              })
    }

    renderSelect = () => {
      return checkAxiosCall(this.props.posts[0],this.SelectFn)
    }

    render() {
        return (
            <div className="SELECT">
              <Form>
                {this.renderSelect()}
              </Form>
            </div>
        );
    }
}

function mapStateToProps({select,posts}) {
  return{select,posts}
}

export default connect(mapStateToProps,{selectPost,deselectPost,fetchPost})(SELECT)
