$(function(){
  function buildHTML(message) {
    var content = message.content ? `${ message.content }` : "";
    var img = message.image ? `<img src= ${ message.image }>` : "";
    var html =`<div class="message">
                <div class="message1">
                  <div class="message1__name">
                    <%= message.user.name %>
                  </div>
                  <div class="message1__date">
                    <%= message.created_at.strftime("%Y/%m/%d %H:%M") %>
                  </div>
                </div>
                <div class="message2">
                  <% if message.content.present? %>
                    <div class="message2__text">
                      <%= message.content %>
                    </div>
                  <% end %>
                  <%= image_tag message.image.url, class: 'message2__image' if message.image.present? %>
                </div>
              </div>`
    return html;
  }
  $('#new_comment').on('submit', function(e){
    e.preventDefault();
    $ajax({
      url: url,
      type: 'POST',
      data: message,
      dataType: 'json',
      processData: false,
      contentType: false,
    })
  })
});