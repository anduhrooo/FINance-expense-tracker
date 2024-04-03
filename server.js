require("dotenv").config();
const express = require('express');
const routes = require('./routes');
const exphbs = require('express-handlebars')
const sequelize = require('./config/connection')
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars');

app.use(routes);

// sync sequelize models to the database, then turn on the server

//set to false to prevent server from restarting
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}! ===================================`));
});
