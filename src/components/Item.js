var React = require('react');


//create path param/attribute that is appended to each time we recursivly render Item
//so we can pass "path" as the param to collapse function
var Item = React.createClass({
  render: function(){
    if(this.props.tree.children){
      //need to make a reference to "this" context bc of new function scope in map
      var self = this;
      var listItems = this.props.tree.children.map(function(node){
        //bind collapse func b/c 'this' inside map is the window, we need
        //collapse bound to the react component
        // if(node.name === 'project1') debugger;
        debugger;
        var boundClick = self.props.collapse.bind(self, node.name);
        return <Item 
                myCollapse={boundClick} 
                collapse={self.props.collapse}
                isCollapsed={node.isCollapsed} 
                tree={node} 
                name={node.name}/>
      })
    }    
    return(
      <div>
        <li onClick={this.props.collapse.bind(this,this.props.tree.name)}>{this.props.tree.name}</li>
        <ul style={this.props.tree.isCollapsed ? {display: 'none'} : {}}>
          {listItems}
        </ul>
      </div>
    )
  }  
});

module.exports = Item;
