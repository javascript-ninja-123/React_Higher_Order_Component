

//Reselect selector
import {createSelector} from 'reselect';


//Create select fucntions to pick off the pieces of stat

const postsSelector = state => state.posts;
const selectedPostsSelector = state => state.select;

const getPosts = (posts, select) => {
  return posts.reduce((acc,val) => {
    const result = val.reduce((inner_acc,inner_val) => {
      if(select.includes(inner_val.id)){
        acc.push(inner_val);
        return acc;
      }
      else return acc;
    },[])
  acc = result;
  return acc;
},[]);
}


export default createSelector(
  postsSelector,
  selectedPostsSelector,
  getPosts //last arugment is the function that has our select logic
)
