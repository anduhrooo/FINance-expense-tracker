require("dotenv").config();
const express = require('express');
const routes = require('./routes');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');
const { sendEmail } = require('./utils/index.js')

const { sendEmail } = require('./utils/index');

const session = require("express-session")

// import sequelize connection

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sess = {
    secret:process.env.SESSION_SECRET,
    cookie: {
        maxAge: 1000*60*60*24
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db:sequelize
    })
}

app.use(session(sess));

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

//Calls the sendEmail Function
sendEmail('briancordovabusiness@gmail.com', 'Dynamic Email Template with Handlebars', 'welcomeMessage');

// sync sequelize models to the database, then turn on the server

//set to false to prevent server from restarting
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}! ===================================`));
});
