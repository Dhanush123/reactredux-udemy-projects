import { combineReducers } from 'redux';
import BooksReducer from "./reducer_books";
import ActiveBook from "./reducer_active_book";

//keys here will be keys in global state, aka in the container's props
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;