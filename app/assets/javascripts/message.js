$(function(){
  function buildHTML(message) {
    var Image = '';
        if (message.image.url) {
            Image = `<img src="${message.image.url}">`;
        }
    var html =`<div class="message" data-message-id="${message.id}">
                <div class="message1">
                  <div class="message1__name">
                    ${message.user_name}
                  </div>
                    <div class="message1__date">
                      ${message.date}
                    </div>
                  <div class="message2">
                    <div class="message2__text">
                      ${message.content}
                      ${Image}
                    </div>
                  </div>`
    return html;
  }
  

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formdata = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formdata,
      dataType: 'json',
      processData: false,
      contentType: false,
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('#message_content').val("");
      $('.form__textfield').val('');
      $('.form__submit').prop('disabled', false);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    })
    .fail(function(data){
      alert('エラーが発生したためメッセージは送信できませんでした');
    })
  })
  var reloadMessages = function () {
    if (window.location.href.match(/\/groups\/\d+\/messages/)){
        var last_message_id = $('.message:last').data("message-id"); 
      $.ajax({
        url: 'api/messages#index {:format=>"json"}',
        type: 'get', 
        dataType: 'json', 
        data: {id: last_message_id} 
      })
      .done(function (messages) {
        console.log(messages);
        var insertHTML = '';
        messages.forEach(function (message) {
          insertHTML = buildHTML(message);
        $('.messages').append(insertHTML);
        })
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
        })
      .fail(function (messages) {
        alert('自動更新に失敗しました');
      });
    }
  }
  setInterval(reloadMessages, 5000);
  });

   

