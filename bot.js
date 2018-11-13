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

client.on('message', message => {
  if (!message.content.startsWith(PrEfix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== '273334684421718016') return;
if (message.content.startsWith(PrEfix + 'wt')) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.sendMessage(`**✅  : ${argresult}**`)
} else 

if (message.content.startsWith(PrEfix + 'ls')) {
client.user.setActivity(argresult, {type:'LISTENING'});
    message.channel.sendMessage(`**✅  : ${argresult}**`)
} else 
if (message.content.startsWith(PrEfix + 'st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/amira");
    message.channel.sendMessage(`**✅  : ${argresult}**`)
}

});

client.login(process.env.BOT_TOKEN);
