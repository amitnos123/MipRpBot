const path = require('path');
module.exports = {
    name: path.basename(__filename).split('.').slice(0, -1).join('.'),
    description: 'Get character information.',
    help: '__Input__' +
        '\n' +
        '[CharName]' +
        '\n\n' +
        '__Argument__' +
        '\n' +
        '`[CharName]` - The character\'s name which will return infromation on.',
    args: true,
    execute(client, message, args) {
        if (args.length === 0) {
            message.channel.send('No character name was given.');
        } else {
            const charName = args[0];

            const charactersManager = require('characters_manager');
            const charMan = new charactersManager();

            if (charMan.exist(charName)) {
                const character = charMan.get(charName);

                const belongUser = client.users.filter(user => user.username === character.belong).first(1)[0];
                let belongTo = message.guild.member(belongUser).nickname; // Return nickname. If doesn't have a nickname, will return null

                if (belongTo === null) {
                    belongTo = character.belong;
                }

                let messageSend = '```md\n';
                messageSend += `Belong to ${belongTo}\n\n`;
                messageSend += 'Inventory\n';
                messageSend += '=========\n';
                for (const item in character.inventory) {
                    if (character.inventory.hasOwnProperty(item)) {
                        const quantity = character.inventory[item];
                        messageSend += `${item} ${quantity}\n`;
                    }
                }
                messageSend += '```';
                message.channel.send(messageSend);
            } else {
                message.channel.send(`Character with name '${charName}' doesn't exists.`);
            }
        }
    },
};