require("dotenv").config();
const express = require('express');
const routes = require('./routes');
const exphbs = require('express-handlebars');
const path = require('path');
// const hbs = exphbs.create({});
const hbs = exphbs.create({
    helpers: {
        select: function (context, index, options) {
            var ret = "";
            ret = ret + options.fn(context[index]);
            return ret;
        },
        selectAll: function (context, options) {
            var num;
            var ret = 0;
            for (var i = 0, j = context.length; i < j; i++) {
                num = parseInt(options.fn(context[i]));
                ret = ret + num;
                console.log("ret: " + ret);
                console.log("num: " + num);
                console.log("context: " + options.fn(context[i]));
            }
            return ret;
        },
        // total: function (context, options) {
        //     var ret = 0;
        //     for (var i = 0, j = context.length; i < j; i++) {
        //         ret = ret + options.fn(context[i])
        //     }
        //     return ret;
        // },
        list: function (context, options) {
            var ret = "";
            for (var i = 0, j = context.length; i < j; i++) {
                ret = ret + options.fn(context[i]);
            }
            return ret;
        }
    }
});

const session = require("express-session")

// import sequelize connection

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sess = {
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

//set to false to prevent server from restarting
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}! ===================================`));
});
