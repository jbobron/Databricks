var React = require('react');
var Item = require('./Item');
var getTree = require('./getTree').getTree;

var Folder = React.createClass({
  getInitialState: function(){
    return {
      tree: getTree()
    }
  },
  //collapse is passed down to each item in list, must be located here 
  //to access tree state
  collapse: function(name){
    console.log("name", name, "collapse flag toggled")
    //modify target node's isCollapsed property
    var modifiedTree = searchTreeAndModifyIsCollpased(this.state.tree,name)
    //set state to new tree
    this.setState({
      tree: modifiedTree
    })
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

function searchTreeAndModifyIsCollpased(tree, target){
  function subroutine(node){
    if(node.name === target){
      node.isCollapsed = !node.isCollapsed;
      return;
    } else {
      node.children.map(function(child){
        subroutine(child);
      })
    }
  }
  subroutine(tree);
  return tree;
}

module.exports = Folder;
