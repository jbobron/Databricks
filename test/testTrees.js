var Tree = function(name){
      this.name = name;
      this.children = [];
      this.isCollapsed = true;
    }

Tree.prototype.addChild = function(name){
  var newTree = new Tree(name);
  this.children.push(newTree);
}

module.exports = {
  getTree: function(){
    var myTree = new Tree('Documents');
    myTree.isCollapsed = false;
    myTree.addChild("Projects");
    myTree.addChild("Frameworks");
    myTree.addChild("Contacts");
    myTree.children[0].addChild('project1');
    myTree.children[0].addChild('project2');
    myTree.children[1].addChild('React');
    myTree.children[1].addChild('Backbone');
    myTree.children[1].addChild('Angular');
    myTree.children[2].addChild('Ion Stoica');
    myTree.children[2].addChild('Matei Zaharia');
    myTree.children[0].children[0].addChild('part1');
    myTree.children[0].children[1].addChild('part2');
    myTree.children[0].children[0].children[0].addChild('v1');
    myTree.children[1].children[1].addChild('backbone1');
    myTree.children[1].children[1].children[0].addChild('v3');
    return myTree;
  },
  simpleTree: function(){
    var myTree = new Tree('Documents');
    myTree.isCollapsed = false;
    return myTree;
  },
  fourNodeTree: function(){
    var myTree = new Tree('Documents');
    myTree.isCollapsed = false;
    myTree.addChild("Projects");
    myTree.addChild("Contacts");
    myTree.children[0].addChild("project1");
    return myTree;
  },
  searchTreeAndModifyIsCollpased: function(tree, path){
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
          count = count +1;
          subroutine(node.children[i], count);
        }
      } 
    }
    subroutine(tree, 1);
    return tree;
  }
}