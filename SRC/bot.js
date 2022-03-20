require("dotenv").config();

const { Client, Intents, MessageAttachment } = require("discord.js");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log(`${client.user.username} has entered the chat`);
});

const gifMap = {
  socko: "https://c.tenor.com/S5KuGn3sdnMAAAAC/mick-foley-sock.gif",
  HOLLYWOOD:
    "https://c.tenor.com/MbmN8S6PT6AAAAAC/hollywood-hogan-hulk-hogan.gif",
  PUMP: "https://cdn.vox-cdn.com/thumbor/sCg4xBjkgciWun9ajncTjLctD8g=/800x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/4223477/scott-steiner-o.0.gif",
  RAZOR: "https://c.tenor.com/E1xMRKvOxqcAAAAC/ramon-razor.gif",
};

client.on("messageCreate", (message) => {
  if (message.author.bot === true) return;

  if (message.content === "I think I'm cute") {
    message.channel.send("I know Im Sexy!");
  }

  //   console.log(`[${message.author.tag}]: ${message.content}`);
  if (message.content === "ay yo") {
    message.channel.send("ay yo!");
  }

  if (message.content === "HOLLYWOOD") {
    message.channel.send({ files: [gifMap[message.content]] });
  }

  if (message.content === "RAZOR") {
    message.channel.send({
      files: [gifMap[message.content]],
    });
  }

  if (message.content === "socko") {
    message.channel.send({
      files: [gifMap[message.content]],
    });
  }

  if (message.content === "PUMP") {
    message.channel.send({ files: [gifMap[message.content]] });
  }
});

client.login(process.env.DISCORDJS_BOT_TOKEN);
