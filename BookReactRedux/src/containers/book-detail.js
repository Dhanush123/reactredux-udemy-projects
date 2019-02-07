import React, {Component} from "react";
import {connect} from "react-redux";

class BookDetail extends Component {
    render() {
        if(!this.props.book){
            return <div>First select a book.</div>
        }
        return(
            <div>
                <h2>Book details:</h2>
                <div>title: {this.props.book.title}</div>
                <div># pages: {this.props.book.pages}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    //ex: state.book is b/c in reducers/index.js there's a activeBook key
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);