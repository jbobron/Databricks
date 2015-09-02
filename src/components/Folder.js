var React = require('react');
var Item = require('./Item');
var getTree = require('./getTree').getTree;

var Folder = React.createClass({
  getInitialState: function(){
    return {
      tree: getTree()
    }
  },
  render: function(){
    return (
      <div>
        <h1> File Structure </h1>
        <ul>
        <Item collapse={this.collapse} tree={this.state.tree} />
        </ul>
      </div>
    )
  }
});

module.exports = Folder;
