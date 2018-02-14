import React from 'react';
import {connect} from 'react-redux';
import SELECTORSPOSTSELECTORS from '../../selectors/selected_post';


const SelectedPostList = (props) => {
  return(
    <ul>
      {
        props.posts.map((value,index) => {
          return(
            <li key={index}>{value.name}</li>
          )
        })
      }
    </ul>
  )
}

const mapStateToProps = state => {
  return{
    posts:SELECTORSPOSTSELECTORS(state)
  }
}

export default connect(mapStateToProps)(SelectedPostList)
