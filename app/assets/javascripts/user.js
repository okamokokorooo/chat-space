$(function(){
function appendUser(user){
  var html =`<div class="chat-group-user clearfix">
              <p class="chat-group-user__name">ユーザー名</p>
              <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="ユーザーのid" data-user-name="ユーザー名">追加</div>
            </div>`
            
}
  $("chat-group-form__field--right").on("keyup", function(user){
      var input = $("chat-group-form__field--right").val();
    $.ajax({
      type: 'GET',
      url: '/users/index',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(users){
      $(".chat-group-form__field--right").empty();
      if (users.length !== 0){
        products.forEach(function(user){
          appendUser(user);
        });
      }
      else{
        appendemptyToHTML("");
      }
    })
    .fail(function(users){
      alert('エラーが発生したため、検索できません');
    })
  });
});