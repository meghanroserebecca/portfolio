var projectView = {};

projectView.populateFilters = function() {
  $('article').not('.template').each(function() {
    var latestCommit, category, optionTag;
    latestCommit = $(this).find('.latestCommit').text();
    optionTag = '<option value="' + latestCommit + '">' + latestCommit + '</option>';
    $('#commit-filter').append(optionTag);
    category = $(this).find('.category').text();
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
      $('article[.latestCommit="' + commit + '"]').fadeIn(3000);
    } else {
      $('article').not('template').show();
    }
    $('#commit-filter').val('');
  });
};

projectView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
    var category = ($('#category-filter').val());
    if (category) {
      $('article').hide();
      $('article p[.category"' + category + '"]').fadeIn(3000);
    }
    else {
      $('article').not('template').show();
    }

    $('#author-filter').val('');

  });
};


projectView.populateFilters();
projectView.handleCommitFilter();
projectView.handleCategoryFilter();
