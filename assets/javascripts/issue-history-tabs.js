/*
Author: Daniel Munn <https://github.com/danmunn
Date: 23/05/2012
*/
function init_tabs() {
  tabComment = $('tab-history_comments');
  tabAll = $('tab-history_all');
  $(tabComment).bind('click', click_comments);
  $(tabAll).bind('click', click_all);
  tabComment.hasClass('selected') ? show_comments() : show_all();
}

function show_comments() {
  $('.journal').hide();
  $('.journal.has-notes').show();
}

function show_all() {
  $('.journal').show();
}

function click_comments(e) {
  tabComment.addClass('selected');
  tabAll.removeClass('selected');
  show_comments();
  Event.stop(e);
}

function click_all(e) {
  tabComment.removeClass('selected');
  tabAll.addClass('selected');
  show_all();
  Event.stop(e);
}

var tabAll;
var tabComment;

$(document).ready(function(){
  init_tabs();
});
