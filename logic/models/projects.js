

function Project (opts) {
  this.title = opts.title;
  this.category = opts.category;
  this.latestCommit = opts.latestCommit;
  this.gitHubUrl = opts.gitHubUrl;
  this.description = opts.description;
}

Project.projects = [];

Project.prototype.toHTML = function() {
  var source = $('#portfolio-template').html(); //grabbing the template (by id) out of our html and bringing it here to pass to Handlebars
  var template = Handlebars.compile(source); //This returns to us a function that takes the context as an argument and returns HTML

  var html = template(this);

  return html;
  $('#projects').append(html);
};


Project.createAndPush = function(inputArr) {
  inputArr.map(function(ele) {
    Project.projects.push(new Project(ele)); //maybe alter this
  });
  console.log(inputArr);
  console.log(Project.projects);
};
