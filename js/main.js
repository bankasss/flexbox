$(function(){
  var $grid = $('.flex_box.align-left'), emptyCells = [], i;
  for (i = 0; i < $grid.find('.flex_item').length; i++) {
      emptyCells.push($('<div>', { class: 'flex_item is-empty' }));
  }
  $grid.append(emptyCells);
  });