var React = require('react/addons'),
    assert = require('assert'),
    Item = require('../../src/components/Item'),
    Folder = require('../../src/components/Folder'),
    simpleTree = require('../testTrees').simpleTree,
    fourNodeTree = require('../testTrees').fourNodeTree,
    searchTreeAndModifyIsCollpased = require('../testTrees').searchTreeAndModifyIsCollpased,
    TestUtils = React.addons.TestUtils;


//POSSIBLE TESTS
//1.tree loads into state in Folder correctly
//2.sub folders with same names collapse correctly
//3.tree with branches of different depths collapses correctly
//4.each node in the tree has a name, isCollpased and children prop
//5.onclick of a item toggles its isCollpased prop in tree data structure. (ex: React.addons.TestUtils.Simulate.click(node);)
//6.(edge case) tests how deep the trees children can go w/out breaking the front end
//7.Item renders an li tag
//8.each node renders the following props on front end:a name, isCollpased and children prop


describe('Simple One Node Tree Item checks', function(){
  var stub = {};
  stub.myTree = simpleTree();
  stub.collapse = function(path){ myTree = searchTreeAndModifyIsCollpased(myTree, path);}
  stub.path = [stub.myTree.name];
  var renderedComponent;
  
  beforeEach('render and check element', function() {
    renderedComponent = TestUtils.renderIntoDocument(
      <Item path={stub.path} collapse={stub.collapse} tree={stub.myTree}/>
    );
  });

  it('Item should exist', function() {
    assert(TestUtils.isCompositeComponent(renderedComponent));
  });

  it('Item should be of type "li"', function() {
    assert(TestUtils.findRenderedDOMComponentWithTag(renderedComponent, "li"));
  });
})

describe(' Four Node Tree Item checks', function(){
  var stub = {};
  stub.myTree = fourNodeTree();
  stub.collapse = function(path){ 
    myTree = searchTreeAndModifyIsCollpased(stub.myTree, path);
  }
  stub.path = [stub.myTree.name];
  var renderedComponent;

  beforeEach('render and check element', function() { 
    renderedComponent = TestUtils.renderIntoDocument(<Item path={stub.path} collapse={stub.collapse} tree={stub.myTree}/>)
  });

  it('Should have 4 Item components rendered', function() {
    var result = TestUtils.findAllInRenderedTree(renderedComponent, function (elem) {
        return TestUtils.isCompositeComponentWithType(elem, Item);
    });
    assert(result.length === 4);
  });

  it('Recursivly created Child Items should have name and isCollpased props', function() {
    var result = TestUtils.findAllInRenderedTree(renderedComponent, function (elem) {
        return TestUtils.isCompositeComponentWithType(elem, Item);
    });
    for(var i = 1; i < result.length; i++){
      assert("isCollapsed" in result[i].props)
      assert("name" in result[i].props)
    }
  });

})










