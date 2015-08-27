var Tree = function(name){
  this.name = name;
  this.children = [];
  this.isCollapsed = true;
}

Tree.prototype.addChild = function(name){
  var newTree = new Tree(name);
  this.children.push(newTree);
}




var myTree = new Tree('Documents');
// var myTree = new Tree('Documents');
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

console.log(myTree)
















// Tree.prototype.contains = function(target){
//   function recurse(node){
//     if(node.value === target) return true;
//     else{
//       for(var i = 0; i < node.children.length; i++){
//         return recurse(node.children[i]);
//       }
//       return false;
//     }
//   }
//   return recurse(this);
// }
