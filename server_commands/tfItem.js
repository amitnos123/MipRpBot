const path = require('path');
const constants = require('consts');
module.exports = {
    name: path.basename(__filename).split('.').slice(0, -1).join('.'),
    description: 'Transfer items from one character to another.',
    help: '__Input__' +
        '\n' +
        '[fromCharName] [toCharName] [itemName1] [quantity] ...[itemNameN] [quantity]' +
        '\n\n' +
        '__Support Options__' +
        '\n' +
        `\`${constants.COMMAND_OPTION_ALL}\`: ${constants.COMMAND_OPTION_ALL_DESCRIPTION}` +
        '\n\n' +
        '__Arguments__' +
        '\n' +
        '`[fromCharName]` - The character\'s name which will give the item.' +
        '\n' +
        '`[toCharName]` - The character\'s name which will get the item.' +
        '\n' +
        '`[itemName1]` - The item\'s name which will be transfered.' +
        '\n' +
        '`[quantity]` - How much to transfer from the item which came before it.',
    args: true,
    execute(client, message, args) {
        if (args.length === 0) {
            message.channel.send('No Arguments were given.');
        } else if (args.length < 4) {
            message.channel.send('Not enought Arguments were given.');
        } else if (args.length % 2 === 1) {
            message.channel.send('Not all items got quantity to transfer.');
        } else {
            const fromCharacterName = args.shift(); // Take fromCharName from the args and remove it 
            const toCharacterName = args.shift(); // Take toCharName from the args and remove it
            // After the shift twich, args only holds items' name and quantity

            message.channel.send('Implement');
        }
    },
};
