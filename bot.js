const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", message => {
var prefix = "-";

    var command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
        let args = message.content.split(" ").slice(1).join(" ");
            if(message.author.bot) return;
                if(!message.channel.guild) return;
                    if(!message.guild.member(message.author.id).hasPermission("ADMINISTRATOR")) return;
                if(!args) return;
    if(command === "bc") {
        message.channel.send("**Sent.**").then(m => m.delete(5000));
        message.guild.members.forEach(member => {
            let msg = args.replace("[user]", member);
                member.send(msg);
        });
    }
    if(command === "obc") {
        message.channel.send("**Sent.**").then(m => m.delete(5000));
        message.guild.members.filter(a => a.user.presence.status !== "offline").forEach(member => {
            let msg = args.replace("[user]", member);
            member.send(msg);
        });
    }
    

});

const devs = ["273334684421718016,331081268731052042"]

const adminprefix = "-";

client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
    if (message.content === (adminprefix + "Percie")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else     
    if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : Done :>`)
  return message.reply("**You Can't Change Your Name ,Only After Two Hours :>**");
  } else
    if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
        } else     
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
    if(message.content === adminprefix + "restart") {
      if (!devs.includes(message.author.id)) return;
          message.channel.send(`:warning:️ **Bot restarting by ${message.author.username}**`);
        console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(`⚠️ Bot restarting... ⚠️`);
        console.log("===============================================\n\n");
        client.destroy();
        child_process.fork(__dirname + "/bot.js");
        console.log(`Bot Successfully Restarted`);
    }
  
  });

client.login(process.env.BOT_TOKEN);
