const path = require('path');
const dotenv = require('dotenv');

const parentDir = path.resolve(__dirname, '../../..');
dotenv.config({ path: path.join(parentDir, '.env') });

module.exports = process.env;