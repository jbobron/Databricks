var React = require('react');

//create path param/attribute that is appended to each time we recursivly render Item
//so we can pass "path" as the param to collapse function
var Item = React.createClass({
  getInitialState: function(){
    return {
      tree: this.props.tree
    }
  },
  collapse: function(path){
    //modify target node's isCollapsed property
    var modifiedTree = newSearchTreeAndModifyIsCollpased(this.state.tree);
    //set state to new tree
    this.setState({
      tree: modifiedTree
    })
  },
  render: function(){
    var referencePath =[];
    referencePath = referencePath.concat(this.props.path);
    if(this.state.tree.children){
      //need to make a reference to "this" context bc of new function scope in map
      var self = this;      
      var listItems = this.state.tree.children.map(function(node){
        var myPath = [];
        referencePath = referencePath.concat(node.name);
        myPath = myPath.concat(referencePath.slice());
        referencePath.pop();
        //added key as a attribute to get rid of error, path should be replaced throughout
        //component with key
        return <Item
                key={myPath}
                path={myPath}
                tree={node}
                name={node.name}/>
      })
    }
    //bind collapse func b/c we need collapse bound to the react component 
    return(
      <div>
        <li path={this.props.path} onClick={this.collapse.bind(null, this.props.path)}>{this.state.tree.name}</li>
        <ul style={this.state.tree.isCollapsed ? {display: 'none'} : {}}>
          {listItems}
        </ul>
      </div>
    )
  }  
});

function newSearchTreeAndModifyIsCollpased(tree){
  tree.isCollapsed = !tree.isCollapsed
  return tree;
}

module.exports = Item;
