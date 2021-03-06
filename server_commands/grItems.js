const path = require('path');
const constants = require('consts');
const log_writer = require('log_writer');
const lw = new log_writer(constants.LOG_DIRECTORY_PATH);
module.exports = {
    name: path.basename(__filename).split('.').slice(0, -1).join('.'),
    description: 'Grand items for a character.',
    help: '__Input__' +
        '\n' +
        '[charName] [itemName1] [quantity] ... [itemNameN] [quantity]' +
        '\n\n' +
        '__Arguments__' +
        '\n' +
        '`[charName]` - The character\'s name which will give the item.' +
        '\n' +
        '`[itemName1]` - The item\'s name which will be transfered.' +
        '\n' +
        '`[quantity]` - How much to transfer from the item which came before it.',
    args: true,
    execute(client, message, args) {
        if (args.length === 0) {
            message.channel.send('No Arguments were given.');
        } else if (args.length < 3) {
            message.channel.send('Not enought Arguments were given.');
        } else if (args.length % 2 === 0) {
            message.channel.send('Not all items got quantity to transfer.');
        } else {
            const toCharacterName = args.shift(); // Take toCharName from the args and remove it
            // After the shift twice, args only holds items' name and quantity

            const charactersManager = require('characters_manager');
            const charMan = new charactersManager();

            const toCharacter = charMan.get(toCharacterName);

            // If toCharacter doesn't have an inventory, then create an empty one
            if (toCharacter.inventory === undefined) {
                toCharacter.inventory = {};
            }

            for (let index = 0; index < args.length; index += 2) {
                // Jump by 2, because the on index it's the item name and index + 1 is the quantity
                const itemName = args[index];
                const quantity = parseInt(args[index + 1]);

                if (quantity > 0) {
                    // Add item toCharacter
                    if (toCharacter.inventory.hasOwnProperty(itemName)) {
                        // If has item, then add to the item's quantity
                        toCharacter.inventory[itemName] = (parseInt(toCharacter.inventory[itemName]) + quantity).toString();
                    } else {
                        // If doesn't has item, then add to the item in the inventory
                        toCharacter.inventory[itemName] = quantity.toString();
                    }
                }
            }

            charMan.update(toCharacterName, 'inventory', toCharacter.inventory);
            lw.log_message('debug', `${toCharacterName} new inventory ${JSON.stringify(toCharacter.inventory, undefined, 2)}.`);

            if (args.length > 2) {
                message.channel.send('Items were granted.');
            } else {
                message.channel.send('Item was granted.');
            }
        }
    },
};
