const { User } = require('../models');

const UserData = [
  {
    first_name: 'Andrew',
    last_name: 'Yang',
    email: 'test@test.test',
    password: 'password',
  },
];

const seedUsers = () => User.bulkCreate(UserData);

module.exports = seedUsers;