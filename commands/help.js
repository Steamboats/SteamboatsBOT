exports.run = (client, message, args) => {
  /*
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
  */

//trying out embeds

  message.channel.send({
    "embed": {
        "title": "__**Help & Commands**__",
        "description": "Some bot info",
        "color": 13858303,
        "fields": [
          {
            //blank field for spacing
            "name": "\u200b",
            "value": "\u200b"
          },
          {
            "name": "**__Core__**",
            "value": "**!ping** - repies with 'pong show? ;)'\n\n**!angry** - replies with 'I also angry!\n\n**!stats** - shows bot statistics"
          },
          {
            //blank field for spacing
            "name": "\u200b",
            "value": "\u200b"
          },
          {
            "name": "**__FOOOOOOD__**",
            "value": "**!what_to_eat**\nGet help to decide where to eat, the higher the upvotes for a food choice, the more likely it will be selected\n\n**!list_food**\nList out all food places in database with respective ID\n\n**!add_food** *<food @ location>*\nFormat must be '*food* @ *location*' for it to be added into database\n\n**!upvote_food** *<id>*\nAdd one upvote to a food choice -> Upvotes will increase likelihood of choice being randomly selected\n`e.g. !upvote_food 1 \n    -> upvotes food with ID 1. Can get ID by !list_food.`\n\n**!downvote_food** *<id>*\nDecrease score of food choice by 1\n`e.g. !downvote_food 2 \n    -> downvotes food with ID 2. Can get ID by !list_food.`\n\n**!delete_food** *<id>*\nDeletes a food choice. Only the author can delete their own food choice.\n`e.g. !delete_food 1\n    -> food at index 1 will be deleted if you are the author.`"
          },
          {
            //blank field for spacing
            "name": "\u200b",
            "value": "\u200b"
          },
          {
            "name": "**__The Naughty List__**",
            "value": "**!jieyin**\nThe *\"purest\"* element on Earth...\n\n**!jasmin**\n:cactus:"
          },
          {
            //blank field for spacing
            "name": "\u200b",
            "value": "\u200b"
          }
        ],
        "footer": {
          "text": "© Steamboatszxc"
        },
        "timestamp": new Date()
      }
  })
}