module.exports = async client => {
    // Online
    console.log(`${client.user.tag} is ready!`);
  
    // SteamboatsBOT is playing !help
    client.user.setActivity(`${client.config.prefix}help (Dylan's Host)`, {type: "PLAYING"});
  };