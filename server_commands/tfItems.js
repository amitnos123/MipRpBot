const path = require('path');
const constants = require('consts');
const log_writer = require('log_writer');
const lw = new log_writer(constants.LOG_DIRECTORY_PATH);
module.exports = {
    name: path.basename(__filename).split('.').slice(0, -1).join('.'),
    description: 'Transfer items from one character to another.',
    help: '__Input__' +
        '\n' +
        '[fromCharName] [toCharName] [itemName1] [quantity] ... [itemNameN] [quantity]' +
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
            // After the shift twice, args only holds items' name and quantity

            const charactersManager = require('characters_manager');
            const charMan = new charactersManager();

            const fromCharacter = charMan.get(fromCharacterName);
            const toCharacter = charMan.get(toCharacterName);

            const authorizationCommandManager = require('authorization_command_manager');
            const authSettings = new authorizationCommandManager.authorizationSettings();

            const callerUsername = message.member.user.username;
            // Validate that the character belong to the user which called the command or it's a root user
            if (fromCharacter.belong === callerUsername || authSettings.is_root(callerUsername)) {

                for (let index = 0; index < args.length; index += 2) {
                    // Jump by 2, because the on index it's the item name and index + 1 is the quantity
                    const itemName = args[index];
                    let quantity = parseInt(args[index + 1]);

                    if (quantity <= 0) {
                        // Not allowed to have negative quantity
                    } else if (fromCharacter.inventory !== undefined) {
                        if (fromCharacter.inventory.hasOwnProperty(itemName)) { // If item is inside the character's inventory
                            if (parseInt(fromCharacter.inventory[itemName]) <= quantity) { // If want to transfer more then you have
                                quantity = parseInt(fromCharacter.inventory[itemName]); // Transfer all
                                delete fromCharacter.inventory[itemName]; // Remove the item from the inventory
                            } else {
                                // Remove the quantity from the item fromCharacter.inventory[itemName]
                                fromCharacter.inventory[itemName] = (parseInt(fromCharacter.inventory[itemName]) - quantity).toString();
                            }

                            // If toCharacter doesn't have an inventory, then create an empty one
                            if (toCharacter.inventory === undefined) {
                                toCharacter.inventory = {};
                            }
                            // Add item toCharacter
                            if (toCharacter.inventory.hasOwnProperty(itemName)) {
                                // If has item, then add to the item's quantity
                                toCharacter.inventory[itemName] = (parseInt(toCharacter.inventory[itemName]) + quantity).toString();
                            } else {
                                // If doesn't has item, then add to the item in the inventory
                                toCharacter.inventory[itemName] = quantity;
                            }

                            // Update the inventories
                            charMan.update(fromCharacterName, 'inventory', fromCharacter.inventory);
                            charMan.update(toCharacterName, 'inventory', toCharacter.inventory);

                            lw.log_message('debug', `${fromCharacterName} new inventory ${JSON.stringify(fromCharacter.inventory, undefined, 2)}.`);
                            lw.log_message('debug', `${toCharacterName} new inventory ${JSON.stringify(toCharacter.inventory, undefined, 2)}.`);
                        }
                    } else {
                        lw.log_message('debug', `${fromCharacterName} doesn't has an inventory.`);
                    }
                }

                message.channel.send('Items was transfered.');
            } else {
                message.channel.send('Character isn\'t belong to you.');
            }
        }
    },
};