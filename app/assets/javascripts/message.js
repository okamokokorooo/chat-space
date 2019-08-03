$(function(){
  function buildHTML(message) {
    var content = message.content ? `${ message.content }` : "";
    var img = message.image ? `<img src= ${ message.image }>` : "";
    var html =`<div class="message">
                <div class="message1">
                  <div class="message1__name">
                    ${message.user.name}
                  </div>
                  <div class="message1__date">
                    ${message.created_at.strftime("%Y/%m/%d %H:%M")}
                  </div>
                </div>
                <div class="message2">
                  ${message.content}
                </div>`
    return html;
  }
  $('#new_comment').on('submit', function(e){
    e.preventDefault();
    var message = new FormData(this);
    var url = $(this).attr('action');
    $ajax({
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
      $('#message_content').val('');
    })
    .fail(function(data){
      alert('エラーが発生したためメッセージは送信できませんでした')
    })
  })
});