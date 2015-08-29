var React = require('react');

module.exports = React.createClass({
  displayName: 'TodoItem',

  getInitialState: function() {
    return { 
      done: false,
      name: "Jake" 
    }
  },

  render: function() {
    return (
      <label>
        <input type="checkbox" defaultChecked={this.state.done} />
        {this.state.name}
      </label>
    );
  }
});