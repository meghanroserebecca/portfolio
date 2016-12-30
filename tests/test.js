QUnit.test('Project should create a new Project', function(assert) {
  obj = {
    category: 'early work'
  };

  var test = new Project(obj);

  assert.equal(test.category, 'early work');
});
