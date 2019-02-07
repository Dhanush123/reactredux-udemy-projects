import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});
//must use form keyword w/ redux-form^

export default rootReducer;
