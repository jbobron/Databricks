var React = require('react');

var collapseStyle = {};

var Item = React.createClass({

  render: function(){
    var classString = "";
    var checkMe = this.props.tree.children ? true: false;
    //recursively creates Item tags for each node in tree
    if(checkMe){
      var self = this;
      var listItems = this.props.tree.children.map(function(child, i){
        var boundClick = self.props.collapse.bind(self, child.name);
        return <Item i={i} collapse={boundClick} isCollapsed={child.isCollapsed} tree={child} name={child.name}/>
      })
    }
    collapseStyle = this.props.tree.isCollapsed ? {display: 'none'} : {};
    
    return(
      <div>
        <li onClick={this.props.collapse.bind(this,this.props.tree.name)}>{this.props.tree.name}</li>
        <ul style={collapseStyle}>
          {listItems}
        </ul>
      </div>
    )
  }  
});

module.exports = Item;

/*




if(this.props.replies){
      replies = this.props.replies.map(function (reply) {
        return (
          <Comment author={reply.author} body={reply.body} image={reply.image} replies={reply.replies} ></Comment>
        );
      });
    }
    

*/