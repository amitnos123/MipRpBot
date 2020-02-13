const path = require('path');
module.exports = {
  name: path.basename(__filename).split('.').slice(0, -1).join('.'),
  description: 'Create\\Update a character.',
  help: '__Input__' +
    '\n' +
    '[CharName]' +
    '\n\n' +
    '__Argument__' +
    '\n' +
    '`[CharName]` - The character\'s name which will be created.',
  args: true,
  execute(client, message, args) {
    if (args.length === 0) {
      message.channel.send('No character name was given.');
    } else {
      const charName = args[0];

      const charactersManager = require('characters_manager');
      const charMan = new charactersManager();

      if (charMan.exist(charName)) {
        message.channel.send(`Character with name '${charName}' already exists.`);
      } else {
        charMan.create(charName, message.member.user.username);

        message.channel.send(`Character '${charName}' was created.`);
      }
    }
  },
};
