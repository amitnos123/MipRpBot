const path = require('path');
module.exports = {
    name: path.basename(__filename).split('.').slice(0, -1).join('.'),
    description: '',
    args: true,
    execute(client, message, args) {
        if (args.length === 0) {
            message.channel.send('No arguments were sent.');
        } else if (args.length === 1) {
            message.channel.send('Item description wasn\'t given.');
        } else {
            // Defining arguments for the command
            const itemName = args[0];
            let itemDescription = '';

            for (let index = 1; index < args.length; index++) {
                const element = args[index];
                itemDescription += element + ' ';
            }

            itemDescription = itemDescription.slice(0, -1);

            const constants = require('consts');

            if (itemName === constants.COMMAND_OPTION_DONT_CHANGE) {
                message.channel.send('Can\'t use command option \'don\'t change\' on itemName.');
            } else {
                const itemManager = require('items_manager');
                const itemMan = new itemManager();

                const itemExist = itemMan.existName(itemName);

                // Validate that can use COMMAND_OPTION_DONT_CHANGE
                if (itemDescription === constants.COMMAND_OPTION_DONT_CHANGE) {
                    if (!itemExist) {
                        message.channel.send('Item doesn\'t exist, then can\'t use command option \'don\'t change\'.');
                        return; // Stop the command here
                    }

                    // If the value is undefined, then will not change the data.
                    itemDescription = undefined;
                }

                if (!itemExist) {
                    itemMan.create(itemName);
                }

                itemMan.update(itemName, itemDescription);
                message.channel.send('Item was created.');
            }
        }
    },
};
