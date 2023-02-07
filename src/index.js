const { Client, IntentsBitField, REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

const commands = [
  {
    name: 'ask',
    description: 'Ask me a question',
    options: [
      {
        name: 'question',
        description: 'Enter your question',
        type: ApplicationCommandOptionType.String,
        required: true
      }
    ]
  }
];

const rest = new REST({version: '10'}).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log("Registering slash commands...");

    await rest.put(
      Routes.applicationGuildCommands('1072259293576966275', process.env.GUILD_ID),
      {body: commands}
    )

    console.log("Slash Commands registered successfully");
  } catch (error) {
    console.log(`An error occured, details: ${error}`);
  }
})();

client.on("ready", (c) => {
  console.log(`${c.user.tag} is online`);
});

function createRandomInt()
{
  min = Math.ceil(0);
  max = Math.floor(19);
  return Math.floor(Math.random() * (max - min) + min);
}

client.on("interactionCreate", (interaction) => {
  if(!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ask") {
    const user_question = interaction.options.get('question');
    //interaction.reply(`So, from what I can see, your question is: ${user_question.value}`);
    console.log(user_question);
    const randInt = createRandomInt();
    console.log("User got the random number: " + randInt);
    switch (randInt) {
      case 0:
        interaction.reply(`You asked: ${user_question.value}. My answer is that ` + "it is certain");
        break;
      case 1:
        interaction.reply(`You asked: ${user_question.value}. My answer is that ` + "it is decidedly so");
        break;
      case 2:
        interaction.reply(`You asked: ${user_question.value}. My answer is ` + "without a doubt");
        break;
      case 3:
        interaction.reply(`You asked: ${user_question.value}. My answer is ` + "yes - definitely");
        break;
      case 4:
        interaction.reply(`You asked: ${user_question.value}. My answer is that ` + "you may rely on it");
        break;
      case 5:
        interaction.reply(`You asked: ${user_question.value}. My answer is that ` + "as I see it, yes");
        break;
      case 6:
        interaction.reply(`You asked: ${user_question.value}. My answer is ` + "most likely");
        break;
      case 7:
        interaction.reply(`You asked: ${user_question.value}. To this I say your` + "outlook is good");
        break;
      case 8:
        interaction.reply(`You asked: ${user_question.value}. My answer: ` + "Yes");
        break;
      case 9:
        interaction.reply(`You asked: ${user_question.value}. My answer is that ` + "signs point to yes");
        break;
      case 10:
        interaction.reply(`You asked: ${user_question.value}. For this, my ` + "reply is hazy, try again");
        break;
      case 11:
        interaction.reply(`You asked: ${user_question.value}. ` + "Ask again later");
        break;
      case 12:
        interaction.reply(`You asked: ${user_question.value}. I ` + "better not tell you now");
        break;
      case 13:
        interaction.reply(`You asked: ${user_question.value}. I ` + "cannot predict that now");
        break;
      case 14:
        interaction.reply(`You asked: ${user_question.value}. ` + "Concentrate and ask again");
        break;
      case 15:
        interaction.reply(`You asked: ${user_question.value}. ` + "Dont count on it");
        break;
      case 16:
        interaction.reply(`You asked: ${user_question.value}. ` + "My reply is no");
        break;
      case 17:
        interaction.reply(`You asked: ${user_question.value}. ` + "My sources say no");
        break;
      case 18:
        interaction.reply(`You asked: ${user_question.value}. Your ` + "outlook: not so good");
        break;
      case 19:
        interaction.reply(`You asked: ${user_question.value}. To this I am ` + "Very doubtful");
        break;
      default:
        interaction.reply("Well this is unexpected, you shouldnt ever have to get this response");
    }
  }
});

client.login(process.env.TOKEN);
