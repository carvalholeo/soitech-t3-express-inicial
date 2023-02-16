const testEnvironment = process.env.NODE_ENV === 'test' ? '.env.test' : '.env';

const dotenv = require('dotenv');
dotenv.config({ path: testEnvironment });
