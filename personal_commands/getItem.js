const path = require('path');
module.exports = {
    name: path.basename(__filename).split('.').slice(0, -1).join('.'),
    description: '',
    args: true,
    execute(client, message, args) {
        const itemManager = require('items_manager');
        const itemMan = new itemManager();

        let messageSend = '';
        if (args.length === 0) { // Return all
            const itemsJson = itemMan.get();
            for (const itemName in itemsJson) {
                messageSend += messageSingleItem(itemsJson[itemName], itemName);
                messageSend += '\n\n';
            }
        } else { // Givin spesific item
            for (let index = 0; index < args.length; index++) {
                const itemName = args[index];
                const itemJson = itemMan.get(itemName);
                if (itemJson !== undefined) {
                    messageSend += messageSingleItem(itemJson, itemName);
                    messageSend += '\n\n';
                }
            }
        }

        message.channel.send(messageSend);
    },
};

/**
 * Function which return the message to send, for a given item
 * @param {JSON} itemJson - Json of the item
 * @param {string} itemName - The name of the item
 * @returns {string} - Return the message for a item
 */
function messageSingleItem(itemJson, itemName) {

    let message = `**${itemName}:** `;

    if (Object.keys(itemJson).length > 0) {
        message += '```diff\n- ';
        for (const prop in itemJson) {
            if (itemJson.hasOwnProperty(prop)) {
                const propValue = itemJson[prop];
                message += `${propValue}, `;
            }
        }
        message = message.substring(0, message.length - 2); // remove last 2 chars which are ", "
        message += '```';
    } else {
        message += '*Empty*';
    }

    return message;
}