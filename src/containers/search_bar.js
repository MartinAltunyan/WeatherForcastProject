import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { fetchWeather} from '../actions/index';


class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state={term: ''}
        this.onInputChange=this.onInputChange.bind(this);
        this.onFormSubmit=this.onFormSubmit.bind(this);
    }
        //callback function onChnage
    onInputChange(event){
        
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event){
        event.preventDefault();
        //Api Submit  to openweathermap.org/forcast5
        //api.openweathermap.org/data/2.5/forecast?q={city name},{country code}
        //Fetch Data
        this.props.fetchWeather(this.state.term);
        
        this.setState({term:''});
    }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="input-group">
            <input 
            onChange={this.onInputChange}
            placeholder="Five Day Forcast "
            className='form-control'
            value={this.state.term}
                />
            <span className="input-group-btn">
                <button className="btn btn-dark">Submit</button>
                </span>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather},dispatch);
    
}
export default connect(null, mapDispatchToProps)(SearchBar);