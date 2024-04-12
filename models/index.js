const User = require('./users');
const Expense = require('./expenses');

User.hasMany(Expense, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Expense.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = {
    User,
    Expense
}