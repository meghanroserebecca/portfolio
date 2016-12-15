var projects = [];

function Project (opts) {
  this.title = opts.title;
  this.category = opts.category;
  this.latestCommit = opts.latestCommit;
  this.gitHubUrl = opts.gitHubUrl;
  this.description = opts.description;
}

Project.prototype.toHTML = function() {
  var $newProject = $('article.template').clone();
  $newProject.find('h3').html(this.title);
  $newProject.find('div.category').html(this.category);
  $newProject.find('div.latestCommit').html(this.latestCommit);
  $newProject.find('a').attr('href', this.gitHubUrl);
  $newProject.find('section.description').html(this.description);

  $newProject.removeAttr('class');

  return $newProject;
};

projectObject.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(a) {
  $('#projects').append(a.toHTML());
});
