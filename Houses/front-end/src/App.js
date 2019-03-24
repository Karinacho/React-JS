import React, { Component } from 'react';
import Street from './components/Street/Streets';
import House from './components/House/House';
import HouseDetails from './components/HouseDetails/HouseDetails';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      streets: [],
      selectedStreetIndx: 0,
      selectedHouseIndsx: 0,
      hasFetched: false
    }
  }
  componentWillMount() {
    fetch('http://localhost:9999/feed/street/all')
      .then(response => response.json())
      .then(data => {
        this.setState({
          streets: data.streets,
          hasFetched: true
        })
      })
  }
  streetHoverEvent(idx){
    this.setState({
      selectedStreetIndx: idx
    })
  }
  houseHoverEvent(idx){
    this.setState({
      selectedHouseIndsx: idx
    })
  }
  getStreets() {
    return this.state.streets;
  }
  getSelectedStreet(){
    if(this.state.hasFetched){
      return this.state.streets[this.state.selectedStreetIndx].homes;
    }
    return [];
  }
  getSelectedHouse(){
    if(this.state.hasFetched){
      return this.state.streets[this.state.selectedStreetIndx].homes[this.state.selectedHouseIndsx];
    }
    return [];

  }
  render() {
    return (
      <div className="App">
        <div className="streets">
        <h2>Streets</h2>
          {this.getStreets().map((street, indx) => (
            <Street location={street.location} key={indx} id={indx} streetHoverEvent={this.streetHoverEvent.bind(this)}/>

          ))}
     </div>
     <div className="houses">
        <h2>Houses</h2>
          {this.getSelectedStreet().map((house, indx) => (
            <House imageUrl={house.imageUrl} id={indx} key={indx} houseHoverEvent={this.houseHoverEvent.bind(this)}/>

          ))}
     </div>
     <HouseDetails type={this.getSelectedHouse().type} description={this.getSelectedHouse().description}
      imageUrl={this.getSelectedHouse().imageUrl} price={this.getSelectedHouse().price} key={this.state.selectedHouseIndsx} 
      houseHoverEvent={this.houseHoverEvent.bind(this)} />
     </div>
    );
  }
}

export default App;
