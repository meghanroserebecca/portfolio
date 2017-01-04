(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    $('#articles').hide().filter('#about-me').show();
  };

  module.aboutController = aboutController;
})(window);
