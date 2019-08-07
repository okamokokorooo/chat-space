$(function(){
  function buildHTML(message) {
    var content = message.content ? `${ message.content }` : "";
    var img = message.image ? `<img src= ${ message.image }>` : "";
    var html =`<div class="message" data-id="${message.id}">
                <div class="message1">
                  <div class="message1__name">
                    ${message.name}
                  </div>
                    <div class="message1__date">
                      ${message.date}
                    </div>
                  <div class="message2">
                    ${message.content}
                  </div>`
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var message = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: message,
      dataType: 'json',
      processData: false,
      contentType: false,
    })
    .done(function(data){
      var html = buildHTML(data);
      $(`.messages`).append(html);
      $('#message_content').val("");
      $('.form__textfield').val('');
      $('.form__submit').prop('disabled', false);

    })
    .fail(function(data){
      alert('エラーが発生したためメッセージは送信できませんでした');
    })
  })
});