var React = require('react');
var Item = require('./Item');

var Folder = React.createClass({
  getInitialState: function(){
    return {
      tree: getTree()
    }
  },
  collapse: function(index){
    console.log("clicked", index)
    //modify nodes isCollapsed
    
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



module.exports = Folder;

