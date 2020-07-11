exports.run = (client, message, args) => {
  const command_overview = `You can command me to...
  !ping - replies with 'pong show? ;)'
  !angry - replies with 'I also angry!'
  !jieyin - ;)
  !jasmin - ;)
  -- FOOD RELATED --
  !what_to_eat - Get help to decide where to eat, the higher the upvotes for a food choice, the more likely it will be selected
  !list_food - List out all food places in database with respective ID
  !add_food <food @ location> - Format must be 'food @ location' for it to be added into database
    e.g. !add_food Ramen Nagi @ Suntec City
      -> Adds new food type Ramen Nagi @ Suntec City, ID will be automatically created
  !upvote_food <id> - Add one upvote to a food choice -> Upvotes will increase likelihood of choice being randomly selected
    e.g. !upvote_food 1 
      -> upvotes food with ID 1. Can get ID by !list_food.
  !downvote_food <id> - Decrease score of food choice by 1
    e.g. !downvote_food 2 
      -> downvotes food with ID 2. Can get ID by !list_food.
  !delete_food <id> - Only authors of the choice can delete a choice
    e.g. !delete_food 1
      -> food at index 1 will be deleted if you are the author.
  `
  message.channel.send(command_overview);
}

