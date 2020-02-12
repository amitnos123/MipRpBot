const path = require('path');
module.exports = {
    name: path.basename(__filename).split('.').slice(0, -1).join('.'),
    description: 'Get character information.',
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
                const belongNickname = message.guild.member(belongUser).nickname;

                let messageSend = '```md\n';
                messageSend += `Belong to ${belongNickname}\n\n`;
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