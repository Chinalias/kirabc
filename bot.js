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

client.login(process.env.BOT_TOKEN);
