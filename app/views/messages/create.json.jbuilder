json.id      @message.id
json.content @message.content
json.date    @messaage.created_at.strftime("%Y/%m/%d %H:%M")
json.user_name @message.user.name
json.image   @message.image