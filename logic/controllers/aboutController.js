(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    $('section[id="articles"]').hide();
    $('section[id="about-me"]').show();
  };

  module.aboutController = aboutController;
})(window);
