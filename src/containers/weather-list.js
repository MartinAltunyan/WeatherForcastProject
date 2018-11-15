import React, { Component } from 'react'
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


 class WeatherList extends Component {
     //map in our object using this function
     renderWeather(cityData){
        //  if (cityData.error) {
        //     const message = cityData.message
        //  } else {
         const name = cityData.city.name;
         const temps = _.map(cityData.list.map( weather => weather.main.temp), (temp) =>(temp-273.1)*9/5+32);
         const pressure = cityData.list.map( weather => weather.main.pressure);
         const humidity = cityData.list.map( weather => weather.main.humidity);
         const lon = cityData.city.coord.lon;
         const lat = cityData.city.coord.lat;
        //  



         return(
            
                <tr key={name}>
                    <td><GoogleMap lon={lon} lat={lat}/></td>
                    <td><Chart data={temps} color='blue' units='F'/></td>    
                    <td><Chart data={pressure} color='green' units='hPa'/></td>    
                    <td><Chart data={humidity} color='grey' units='%'/></td>     
                </tr>
        

            
        );
     }
  render() {
    return (
        
      <table className='table table-hover'>
        <thead>
            <tr>
                <th>City on Google Map</th>
                <th>Tempreture (F)</th>
                <th>Pressure (hPa)</th>
                <th>Humidity (%)</th>
            </tr>
        </thead>
    
        <tbody>
                 
                        
                {this.props.weather.map(this.renderWeather)}
                
        </tbody>
      </table>
      
    )
    
  }
}

function mapStateToProps(state){
    return{ weather: state.weather }
}

export default connect(mapStateToProps)(WeatherList);