(function(module) {
  var projectController = {};

  projectController.reveal = function() {
    $('section[id="about-me"]').hide();
    $('section[id="articles"]').show();
  };

  module.projectController = projectController;
})(window);
