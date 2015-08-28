module.exports = {
  getTree: function(){
    var Tree = function(name){
      this.name = name;
      this.children = [];
      this.isCollapsed = true;
    }

    Tree.prototype.addChild = function(name){
      var newTree = new Tree(name);
      this.children.push(newTree);
    }
    //below is temporary tree
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
    return myTree;
  }

}