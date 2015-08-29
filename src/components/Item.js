var React = require('react');

//create path param/attribute that is appended to each time we recursivly render Item
//so we can pass "path" as the param to collapse function
var Item = React.createClass({
  render: function(){
    if(this.props.tree.children){
      //need to make a reference to "this" context bc of new function scope in map
      var self = this;
      
      var listItems = this.props.tree.children.map(function(node){
        var path = self.props.path || [];
        debugger;
        console.log(node.name)
        //pathSoFar.push(node.name)
        path.push(node.name)
        return <Item
                path = {path}
                collapse={self.props.collapse}
                isCollapsed={node.isCollapsed} 
                tree={node} 
                name={node.name}/>
      })
      //pathSoFar.pop()
    }
    // if(pathSoFar.length === ){
    //   path.push(pathSoFar.slice())
    // }
      
    //bind collapse func b/c we need collapse bound to the react component 
    
    return(
      <div>
        <li path={this.props.path} onClick={this.props.collapse.bind(this, this.props.tree.name)}>{this.props.tree.name}</li>
        <ul style={this.props.tree.isCollapsed ? {display: 'none'} : {}}>
          {listItems}
        </ul>
      </div>
    )
  }  
});

module.exports = Item;
