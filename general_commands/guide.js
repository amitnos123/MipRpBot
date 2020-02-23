const path = require('path');
module.exports = {
    name: path.basename(__filename).split('.').slice(0, -1).join('.'),
    description: 'Guide on how to use the command.',
    help: 'Doesn\'t get a input',
    args: true,
    execute(client, message, args) {
        const discord = require('discord.js');

        const embedGeneralGuideMessage = new discord.RichEmbed()
            .setColor('#ff0000') // RED
            .setTitle('Bot Commands');

        generalGuideMessage = 'In order to initiate a bot command you must type the following (+-Insert the command without a space-). For example (+fChar) which creates (Character name)';

        embedGeneralGuideMessage.setDescription(generalGuideMessage);
        message.channel.send(embedGeneralGuideMessage);

        const embedListBotCommandsGuideMessage = new discord.RichEmbed()
            .setColor('#ff9900') // ORANGE
            .setTitle('List of bot commands: Beginning');

        listBotCommandsGuideMessage = 'To get help/advice on a command you type +help. For example typing +help help fchar ';
        listBotCommandsGuideMessage += '\n';
        listBotCommandsGuideMessage += 'which will give you a brief description of what the command does. This command works ';
        listBotCommandsGuideMessage += '\n';
        listBotCommandsGuideMessage += 'with server commands & personnel commands.';

        embedListBotCommandsGuideMessage.setDescription(listBotCommandsGuideMessage);
        message.channel.send(embedListBotCommandsGuideMessage);

        const embedPersonalGuideMessage = new discord.RichEmbed()
            .setColor('#00ff00') // Green
            .setTitle(':robot: Personal Commands');

        personalGuideMessage = 'To create / update an item: +fItem  “Item name”';
        personalGuideMessage += '\n';
        personalGuideMessage += 'To create / update a stat: +fStat “Stat name”';
        personalGuideMessage += '\n';
        personalGuideMessage += 'To create / update status: +fStatus “Status name”';
        personalGuideMessage += '\n';
        personalGuideMessage += 'To get data of a given item: +GetItems “Item name”';
        personalGuideMessage += '\n';
        personalGuideMessage += 'To get data of a given stat: +getStat “Stat name”';
        personalGuideMessage += '\n';
        personalGuideMessage += 'To get remove an item: +rmItem “Item name”';
        personalGuideMessage += '\n';
        personalGuideMessage += 'To remove a stat: +rmStat “Stat name”';
        personalGuideMessage += '\n';
        personalGuideMessage += 'To remove a status: +rmStatus “Status name”';

        embedPersonalGuideMessage.setDescription(personalGuideMessage);
        message.channel.send(embedPersonalGuideMessage);

        const embedServerGuideMessage = new discord.RichEmbed()
            .setColor('#00ffff') // Cyan
            .setTitle(':desktop: Server Commands');

        serverGuideMessage = 'To create character: +fChar “Character Name” ';
        personalGuideMessage += '\n';
        serverGuideMessage += 'To see inventory: +gChar “Character Name”';
        personalGuideMessage += '\n';
        serverGuideMessage += 'To give character items: +grItems “Character Name” “Item” “Quantity”';
        personalGuideMessage += '\n';
        serverGuideMessage += 'To remove an item from character: +dsItems “Character Name” “Item” “Quantity”';
        personalGuideMessage += '\n';
        serverGuideMessage += 'To remove a character: +rmChar “Character Name”';
        personalGuideMessage += '\n';
        serverGuideMessage += 'To transfer items from one character to another: +tfItems “Character name” “Item”';

        embedServerGuideMessage.setDescription(personalGuideMessage);
        message.channel.send(embedServerGuideMessage);
    },
};