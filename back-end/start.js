const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const userService = require('./services/user')
const cors = require('cors')
const db = require('./models');
const passport = require('passport');



const PORT = 8080;
const app = express();
app.use(passport.initialize());

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

require('./config/passport/passport')
db.sequelize.sync({ alter: false }).then(() => {
    userService(app, db);

    app.get('/protected', passport.authenticate('jwt', { session: false }),
        function (req, res) {
            res.send(req.users);
        });

    app.listen(8080, () => { console.log('server is running') })
})