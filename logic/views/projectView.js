(function(module){
  var projectView = {};

  projectView.populateFilters = function() {
    $('article').each(function() {
      var latestCommit, category, optionTag;
      latestCommit = $(this).find('.commitDate').text();
      optionTag = '<option value="' + latestCommit + '">' + latestCommit + '</option>';
      $('#commit-filter').append(optionTag);
      category = $(this).find('.category-type').text();
      optionTag = '<option value="' + category + '">' + category + '</option>';
      if ($('#category-filter option[value="' + category + '"]').length === 0) {
        $('#category-filter').append(optionTag);
      }
    });
  };

  projectView.handleCommitFilter = function() {
    $('#commit-filter').on('change', function() {
      var commit = $(this).val();
      if (commit) {
        $('article').hide();
        $('article').each(function() {
          var latestCommitDate = $(this).find('.commitDate').text();
          console.log('latestCommitDate: ', latestCommitDate);
          if(commit === latestCommitDate) {
            console.log('this: ', this);
            $(this).fadeIn(3000);
          }
        });
      } else {
        $('article').show();
      }
    });
    $('#commit-filter').val('');
  };

  projectView.handleCategoryFilter = function() {
    $('#category-filter').on('change', function() {
      var category = $(this).val();
      if (category) {
        $('article').hide();
        $('article').each(function() {
          var categoryType = $(this).find('span.category-type').text();
          if(category === categoryType) {
            $(this).fadeIn(3000);
          }
        });
      } else {
        $('article').show();
      }
    });
    $('#category-filter').val('');
  };

  projectView.renderIndexPage = function() {
    Project.projects.forEach(function(a){
      $('#articles').append(a.toHTML());
    });
    projectView.populateFilters();
    projectView.handleCommitFilter();
    projectView.handleCategoryFilter();
  };

  $.ajax('/data/projectObjects.json', {
    	method: 'GET',
    	success: function(response) {
      console.log(response);
      Project.createAndPush(response);
      projectView.renderIndexPage();
    	},
    	error: function(response) {
    	console.log ('error', response);
    }
  });
  module.projectView = projectView;
})(window);
