import React from "react";
import {Field, reduxForm} from "redux-form";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {createPost} from "../actions";
//reduxForm helps component talk to redux store, similar to connect helper

class PostsNew extends React.Component {
    renderField(field) {
        //param is named "field" by convention
        //line below is example of destructuring in es6
        const {meta: {touched, error}} = field;
        const className = `form-group ${touched && error ? "has-danger" : ""}`;
        return (
            <div className={className}>
                <label>{field.label}</label>
                <br />
                <input
                    className="form-control"
                    type="text"
                    // es6 concise way to prevent having to write onchange,onfocus,etc props
                    {...field.input}
                />
                <div className="text-help">
                    {field.meta.touched? field.meta.error : ""}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        this.props.createPost(values, () => {
              this.props.history.push('/');
        });
    }

    render() {
        //comes from reduxform through export @ bottom
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                {/* label is an arbitrary field name */}
                <Field
                    label="Post Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Post Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>

                <Link className="btn btn-danger" to="/">
                    Return Home
                </Link>
            </form>
        );
    }
}

function validate(values) {
    //param is "values" name by convention
    const errors = {};
    //the .propertyname has to be the same as the name of the
    if(!values.title) {
        errors.title = "Enter a title!";
    }
    if(!values.categories) {
        errors.categories = "Enter some categories!";
    }
    if(!values.content) {
        errors.content = "Enter some content!";
    }
    //if errors empty -> error, else redux form sees form as valid to submit
    return errors;
}
export default reduxForm({
    validate,
    form: "PostsNewForm"
})(
    connect(null,{createPost})(PostsNew)
);
//make sure string value for form key^ is unique to help react form
//distinguish multiple (different?) forms on a page