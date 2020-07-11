module.exports = async client => {
    // Online
    client.log(`${client.user.tag} is ready!`);
  
    // SteamboatsBOT is playing !help
    client.user.setActivity(`${client.settings.get("default").prefix}help`, {type: "PLAYING"});
  };