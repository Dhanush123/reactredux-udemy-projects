import React from "react";
import {connect} from "react-redux";
import {fetchPost,deletePost} from "../actions";
import {Link} from "react-router-dom";


class PostsShow extends React.Component {
    componentDidMount() {
        //es6 syntax, but basically this.props.match.params.id is how you get id param from url
        const {id} = this.props.match.params;
        this.props.fetchPost(id);
    }
    onDeleteClick() {
        const {id} = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push("/")
        });
    }
    render() {
        //this.props here is === ownProps
        const {post} = this.props;
        if(!post) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <Link to="/">Go Home</Link>
                <button 
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}
                >
                Delete Post
                </button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

function mapStateToProps({posts}, ownProps) {
    //ownprops is named as such by convention
    //^it is sent to the class as part of props when class is rendered
    return {post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps,{fetchPost,deletePost})(PostsShow);