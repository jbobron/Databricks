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
