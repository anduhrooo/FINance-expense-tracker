const User = require('./users');
const Expense = require('./expenses');

User.hasMany(Expense, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = {
    User,
    Expense,

}