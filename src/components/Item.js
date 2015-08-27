var React = require('react');

var Item = React.createClass({

  render: function(){
    var checkMe = this.props.tree.children ? true: false;
    if(checkMe){ //children with no children dont get index
      var self = this;
      var listItems = this.props.tree.children.map(function(child, i){
        //debugger;
        console.log("check me", self.props.collapse)
        var boundClick = self.props.collapse.bind(self,i);
        return <Item i={i} collapse={boundClick} isCollapsed={child.isCollapsed} tree={child} name={child.name}/>
      })
    }
    return(
      <div>
      
        <li onClick={this.props.collapse}>{this.props.tree.name}</li>
        <ul>
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