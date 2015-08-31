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
  collapse: function(path){
    //modify target node's isCollapsed property
    var modifiedTree = searchTreeAndModifyIsCollpased(this.state.tree, path);
    //set state to new tree
    this.setState({
      tree: modifiedTree
    })
  },
  render: function(){
    var path = [];
    path.push(this.state.tree.name);
    return (
      <div>
        <h1> File Structure </h1>
        <ul>
        <Item path={path} collapse={this.collapse} tree={this.state.tree} />
        </ul>
      </div>
    )
  }
});

function searchTreeAndModifyIsCollpased(tree, path){
  //figure out which index is associated with next item in path
  function subroutine(node, count){
    if(node.name === path[0] && 0 === path.length-1){
      node.isCollapsed = !node.isCollapsed;
    }
    for(var i = 0; i < node.children.length; i++){
      if(node.children[i].name === path[count]){
        if(count === path.length-1){
          node.children[i].isCollapsed = !node.children[i].isCollapsed;
          return;
        }
        count = count + 1;
        subroutine(node.children[i], count)
      }
    } 
  }
  subroutine(tree, 1)
  return tree;
}

module.exports = Folder;
