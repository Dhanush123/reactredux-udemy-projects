import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchWeather} from "../actions/index";

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state={
            term: ""
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    render(){
        return (
            // forms give the convenience of handling both enter key and button submit
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input value={this.state.term}
                placeholder="get 5-day forcast in searched cities"
                className="form-control"
                onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button 
                    type="submit" className="btn btn-secondary">
                    Submit
                    </button>
                </span>
            </form>
        );
    }

    onFormSubmit(event){
        //do this to prevent page reload
        event.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({term:""});
    }

    onInputChange(event){
        console.log(event.target.value);
        this.setState({term:event.target.value});
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather},dispatch);
}

//null b/c not doing mapstatetoprops or else that method would go where null is
export default connect(null, mapDispatchToProps)(SearchBar);