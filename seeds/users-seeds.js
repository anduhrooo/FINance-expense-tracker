const { User } = require('../models');

const UserData = [
  {
    first_name: 'Andrew',
    last_name: 'Yang',
    username: 'anduhrooo',
    email: 'test@test.test',
    password: 'password',
  },
  {
    first_name: 'Keanu',
    last_name: 'Ford',
    username: 'Canoe',
    email: 'test@test.test',
    password: 'password1',
  },
  {
    first_name: 'Brian',
    last_name: 'Cordova',
    username: 'DK',
    email: 'test@test.test',
    password: 'password2',
  },
  {
    first_name: 'Bradley',
    last_name: 'Wallace',
    username: 'Bwallace',
    email: 'test@test.test',
    password: 'password3',
  },
];

const seedUsers = () => User.bulkCreate(UserData,{
  individualHooks:true
});


module.exports = seedUsers;