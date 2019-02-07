import React from "react";
import {connect} from "react-redux";
import {selectBook} from "../actions/index";
import {bindActionCreators} from "redux";

class BookList extends React.Component {
    renderList() {
        return this.props.books.map(book => {
            return (
                <li 
                onClick={() => this.props.selectBook(book)}
                key={book.title} 
                className="list-group-item">
                {book.title}
                </li>
            );
        });
    }
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}           
            </ul>
        );
    }
}


//mapstatetoprops needs to be named that
//the keys returned will be props.keyname in container here
function mapStateToProps(state) {
    //ex: state.books is b/c in reducers/index.js there's a books key
    return {
        books: state.books
    };
}

//like above func, the keys here will also be available thru props
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectBook: selectBook
    }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(BookList);