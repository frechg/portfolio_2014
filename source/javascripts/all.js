//= require jquery
//= project-detail-modal
//= waypoints.min
//= require_tree .

$(document).ready(function() {
  $('article.piece').waypoint(function(down) {
    // $(this).addClass('animate');
  }, { offset: '80%' });
});

$(window).load(function() {
  $('header').addClass('show');
});
