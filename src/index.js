import React from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true, color: 'green' };

    // Ez a kötés(binding) szükséges a `this` használatához a callbackben
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
      color: state.isToggleOn ? 'red' : 'green'
    }));
  }

  render() {
    return (
      <div>
        <br />
        {this.state.isToggleOn ? 'Be van kapcsolva.' : 'Ki van kapcsolva'}
        <br />
        <button onClick={this.handleClick} style={{ backgroundColor: this.state.color, width: '100px', color: 'white', padding: '1em', border: '0px', borderRadius: '10px' }}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        <br />
        {this.state.isToggleOn ? 'Kapcsold ki!' : 'Kapcsold be!'}
      </div>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);