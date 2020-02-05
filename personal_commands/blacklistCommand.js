const path = require('path');
module.exports = {
  name: path.basename(__filename).split('.').slice(0, -1).join('.'),
  description: '',
  args: true,
  execute(client, message, args) {
    //CODE
  },
};
