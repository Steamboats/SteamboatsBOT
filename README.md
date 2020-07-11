# SteamboatsBOT
A Discord BOT created to help our group make decisions since we are fickle minded people.

## Build Project
``` bash
' Project dependency installation
npm install

' Initialise your .env file
touch .env
' Required variables: 
' SECRET_KEY -> for connection to BOT
' MONGO_CONNECTION -> URI for Mongoose.connect(URI...) in app.js

' Run dev with nodemon
npm run dev

' Run start with node
npm run start
```

## TODO:

- Adding comments for food places -> comments array is in DB but comment functionality not added yet
- Weighted randomness taking upvotes of each food place into account
- Reset upvotes / downvotes
- Vote (CountMeIn) type bot for voting on specific issues
