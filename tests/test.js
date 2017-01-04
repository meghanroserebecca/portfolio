'use strict';

QUnit.test('Project should create a new Project', function(assert) {
  var mockObj = {
    category: 'early work'
  };

  var test = new Project(mockObj);

  assert.equal(test.category, 'early work');
});

QUnit.test('Any instance of Project should have access to toHTML method', function(assert) {
  var mockObj = {
    category: 'early work'
  };

  var mockProj = new Project(mockObj);
  var mockMethod = mockProj.toHtml;

  assert.notEqual(mockMethod, 'undefined');
});

QUnit.test('Project.createAndPush should "convert" an array of Objects into an array of "Projects"', function(assert){
  Project.projects = [];
  var mockObjArray = [
    {
      title: 'mock title',
      category: 'mock category',
      latestCommitDate: '2020-12-12'
    },
    {
      title: 'mock title 2',
      category: 'mock category 2',
      latestCommitDate: '3030-6-9'
    }
  ];

  Project.createAndPush(mockObjArray);

  assert.equal(mockObjArray[0].title, Project.projects[0].title);
  Project.projects = [];
});
