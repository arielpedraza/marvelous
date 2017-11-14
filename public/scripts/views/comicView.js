'use strict';
var app = app || {};

((module) => {
  var comicView = {};

  const renderList = function(list) {
    let template = Handlebars.compile($('#list-template').text());
    return template(list);
  };
  const renderItem = function(item) {
    let template = Handlebars.compile($('#item-template').text());
    return template(item);
  };

  comicView.initIndexPage = () => {
    console.log('comicView.initIndexPage function called');
    $('#main-list').empty();
    $('.tab-content').hide();
    app.Event.all.forEach(item => $('#main-list').append(renderList(item)));
    $('#main-list').fadeIn();
  };

  comicView.initFetchOnePage = () => {
    console.log('comicView.initFetchOnePage function called');
    $('#main-item').empty();
    $('.tab-content').hide();
    $('#main-item').append(renderItem(app.Event.one[0]));
    app.Event.one[0].characters.forEach(item => {
      $('.character-list').append(`<li>${item.name}</li>`);
    })
    app.Event.one[0].comics.forEach(item => {
      $('.comics-list').append(`<li>${item.name}</li>`);
    })
    $('#main-item').fadeIn();
  };

  // $('#dropdown').on('change', () => console.log('dropdown event handler called'));

  module.comicView = comicView;
})(app);
