const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const userService = require('./services/user')
const mediaService = require('./services/media')
const keywordService = require('./services/keyword')
const categoryService =require('./services/category')
const cors = require('cors')
const db = require('./models');
const passport = require('passport');
const fileUpload = require('express-fileupload');
const morgan = require('morgan');
const _ = require('lodash');



const PORT = 8080;
const app = express();
app.use(passport.initialize());
app.use(fileUpload({
    createParentPath: true
}));
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static("uploads"));
app.use(morgan('dev'));
require('./config/passport/passport')
db.sequelize.sync({ alter: false }).then(() => {
    userService(app, db);
    mediaService(app, db);
    keywordService(app, db);
    categoryService(app, db);
    app.get('/protected', passport.authenticate('jwt', { session: false }),
        function (req, res) {
            res.send(req.users);
        });

    app.listen(8080, () => { console.log('server is running') })
})