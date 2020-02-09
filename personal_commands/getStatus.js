const path = require('path');
module.exports = {
    name: path.basename(__filename).split('.').slice(0, -1).join('.'),
    description: 'Retrive data of a given status, if no status is given will return every status with it\'s data.',
    args: true,
    execute(client, message, args) {
        //CODE
        message.channel.send('Implement');
    },
};