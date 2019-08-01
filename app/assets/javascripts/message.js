$(function(){
  $('#new_comment').on('submit', function(e){
    e.preventDefault();
    var message = new FormData(this);
  })
});