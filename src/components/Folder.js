var React = require('react');
var Item = require('./Item');

var Folder = React.createClass({
  getInitialState: function(){
    return {
      tree: getTree()
    }
  },
  collapse: function(name){
    //modify nodes isCollapsed
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



function getTree(){
  var Tree = function(name){
    this.name = name;
    this.children = [];
    this.isCollapsed = true;
  }

  Tree.prototype.addChild = function(name){
    var newTree = new Tree(name);
    this.children.push(newTree);
  }
  //TODO: generate random tree here
  //below is temporary tree
  var myTree = new Tree('Documents');
  myTree.isCollapsed = false;
  myTree.addChild("Projects");
  myTree.addChild("Homework");
  myTree.addChild("Todos");
  myTree.children[0].addChild('project1')
  myTree.children[0].addChild('project2')
  myTree.children[1].addChild('hw1')
  myTree.children[1].addChild('hw2')
  myTree.children[1].addChild('hw3')
  myTree.children[2].addChild('buy milk')
  myTree.children[2].addChild('finish coding challenge')

  return myTree;

}


function searchTreeAndModifyIsCollpased(tree, target){
  var found = false;
  function subroutine(node){
    if(node.name === target){
      found = true;
      node.isCollapsed = !node.isCollapsed;
      return;
    } else{
      node.children.map(function(child){
        subroutine(child);
      })
    }
    if(!found) {
      console.log(node.name, target)
      console.log("target not found");
    }
  }
  subroutine(tree);
  return tree;
  //returns modified tree
}


module.exports = Folder;

