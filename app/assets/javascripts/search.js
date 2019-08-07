$(function(){
  function appendUsers(user) {
      var html =`<div class='chat-group-user clearfix'>
                  <p class="chat-group-user__name">
                  ${user.name}
                  </p>
                  <a class="user_search_add chat-group-user__btn chat-group-user__btn--add" data-user-id= ${user.id} data-user-name= ${user.name} >追加
                  </a>
                </div>`
      $('#user_search_result').append(html); 
   }

   function appendMembers(name, user_id) {
      var html =`<div class='chat-group-user' id=${user_id}>
                  <input name='group[user_ids][]' type='hidden' value=${user_id}>
                  <p class='chat-group-user__name'>${name}</p>
                  <a class='user_search_remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
                </div>`
      $('#chat_members').append(html);
   }

   $(function () {
      $("#user-search-field").on("keyup", function () {
          var input = $("#user-search-field").val();
          $.ajax({
              type: 'GET',
              url: '/users',
              data: { name: input },
              dataType: 'json'
          })
          .done(function (users) {
              $("#user_search_result").empty();
              if (users.length !== 0) {
                  users.forEach(function (user) {
                  appendUsers(user);
                  })
              }
          })
          .fail(function () {
              alert('ユーザー検索に失敗しました');
          });
      });
    });
  $(function () {
      $("#user_search_result").on("click", '.user_search_add', function () {
          var name = $(this).attr("data-user-name");
          var user_id = $(this).attr("data-user-id");
          $(this).parent().remove();
          appendMembers(name, user_id);
      });
      $("#chat_members").on("click", '.user_search_remove', function () {
          $(this).parent().remove();
      });
  });
})