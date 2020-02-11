const path = require('path');
module.exports = {
    name: path.basename(__filename).split('.').slice(0, -1).join('.'),
    description: 'Remove a character.',
    args: true,
    execute(client, message, args) {
        if (args.length === 0) {
            message.channel.send('No character name was given.');
        } else {
            const charName = args[0];

            const charactersManager = require('characters_manager');
            const charMan = new charactersManager();

            const authorizationCommandManager = require('authorization_command_manager');
            const authSettings = new authorizationCommandManager.authorizationSettings();

            const usernameRequester = message.member.user.username;
            if (charMan.is_character_belong_to_user(charName, usernameRequester) || authSettings.is_root(usernameRequester)) {
                charMan.remove(charName);

                message.channel.send(`Character '${charName}' was removed.`);
            } else {
                message.channel.send(`Character '${charName}' isn't belongs to you.`);
            }
        }
    },
};
