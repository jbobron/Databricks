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
    console.log("path", path)
    //modify target node's isCollapsed property
    var modifiedTree = searchTreeAndModifyIsCollpased(this.state.tree, path)
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
        <Item path={this.state.tree.name} collapse={this.collapse} tree={this.state.tree} />
        </ul>
      </div>
    )
  }
});

function searchTreeAndModifyIsCollpased(tree, path){
  //figure out which index is associated with next item in path
  function subroutine(node, count){
    debugger;
    for(var i = 0; i < node.children.length; i++){
      if(node.children[i].name === path[count]){
        if(count === path.length-1){
          node.children[i].isCollapsed = !node.children[i].isCollapsed;
          return;
        }
        count = count +1;
        subroutine(node.children[i], count)
      }
    } 
  }
  subroutine(tree, 1)
  return tree;

}



function searchTreeAndModifyIsCollpased_OLD(tree, target){
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
