// I'm writing these here cuz there isn't indentation to worry about
const core = `
**!ping** - Replies with 'pong show? ;)'

**!angry** - Replies with 'I also angry!

**!stats** - Shows BOT statistics
`;

const food = `
**!what_to_eat**
- Get help to decide where to eat. The higher the upvotes a food place has, the more likely it will get chosen

**!list_food**
- List out all food places with their respective IDs from the database

**!add_food** *<food @ location>*
- Add food to database, format **MUST** be *food @ location*
\`e.g. !add_food Ramen Nagi @ Suntec City\`

**!upvote_food / !downvote_food** *<id>*
- Upvote / Downvote food -> The higher the upvotes, the more likely it will be chosen
\`e.g. !upvote_food 1 -> upvotes food with ID 1
e.g. !downvote_food 2 -> downvotes food with ID 2\`

**!delete_food** *<id>*
- Deletes a food choice. Only the authors can delete their own food choice.
\`e.g. !delete_food 1 -> Food with ID 1 will be deleted if you are the author.\`
`;

const naughty_list = `
**!jieyin**
- The *"purest"* element on **EARTH**

**!jasmin**
- :cactus:
`;


exports.run = (client, message, args) => {
  // Add more fun stuff to here!
  const description_list = [
    'Why do I have to help...?',
    'Hello, how many times you do !help already! **YOU** think I so free?',
    'You know, sometimes I, too, think about quitting my job... :\')',
    'What if I don\'t want to help!',
    ':cactus:',
    'Can someone notice... I am just human tooooooo',
    'How is this not already common knowledge?!',
  ];
  const description = description_list[Math.floor(Math.random() * description_list.length)];

  message.channel.send({
    "embed": {
        "title": "__**Help & Commands**__",
        "description": description,
        "color": 13858303,
        "fields": [
          {
            //blank field for spacing
            "name": "\u200b",
            "value": "\u200b"
          },
          {
            "name": "**__Core__**",
            "value": core
          },
          {
            //blank field for spacing
            "name": "\u200b",
            "value": "\u200b"
          },
          {
            "name": "**__FOOOOOOD__**",
            "value": food
          },
          {
            //blank field for spacing
            "name": "\u200b",
            "value": "\u200b"
          },
          {
            "name": "**__The Naughty List__**",
            "value": naughty_list
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
