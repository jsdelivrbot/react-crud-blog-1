import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions';

export default function(state={}, action) {
  switch (action.type) {
    case FETCH_POST:
      // const post = action.payload.data;
      // const newState = { ...state };
      // newState[post.id] = post;
      // return newState;
      return { ...state, [action.payload.data.id]: action.payload.data };

    case FETCH_POSTS:
      // action.payload.data yields a list of posts, ex. [ post1, post2 ]
      // But we want to return an object of objects not an array of posts
      // The object should be { "4": {"id":4, "title":"Hi"}, "25": {"id":25,"title":"Bye"}}
      // We can then target a post as: my_object["4"] and will return {"id":4,"title":"Hi"}
      // This can be achieve using lodash mapKeys method.
      // We need to tell mapKeys the list and the key extract from the object to use as key.
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}