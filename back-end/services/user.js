const jwt = require('jsonwebtoken');
const passport = require('passport');
const config = require('../config/passport/passport');
const bcrypt = require('bcryptjs');
const moment = require('moment')

module.exports = (app, db) => {
  app.post('/registerUser', (req, res, next) => {
    passport.authenticate('register', (err, user, info) => {
      if (info !== undefined) {
        console.error(info.message);
        res.status(403).send(info.message);
      } else {
        const data = ({
          user_profile: req.body.user_profile,
          username: user.username,
          full_name: req.body.full_name,
          birth: req.body.birth,
          role: req.body.role
        })
        console.log(req.body)
        db.users.findOne({
          where: { username: data.username }
        })
          .then(user => {
            user.update({
              user_profile: data.user_profile,
              full_name: data.full_name,
              birth: data.birth,
              role: data.role
            })
              .then(() => {
                console.log('user created in db');
                res.status(200).send({ message: 'user created' })
              })
              .catch(err => {
                console.log(err)
              })
          })

      }
    })(req, res, next);
  })
  app.post('/loginUser', (req, res, next) => {
    passport.authenticate('login', (err, user, info) => {
      if (err) {
        console.error(`error ${err}`);
      }
      if (info !== undefined) {
        console.error(info.message);
        if (info.message === 'username or password is incorrect') {
          res.status(401).send({message: info.message});
        } else {
          res.status(403).send(info.message);
        }
      } else {
        db.users.findOne({
          where: {
            username: req.body.username,
          },
        }).then(user => {
          const token = jwt.sign({ id: user.user_id, role: user.role }, config.jwtOptions.secretOrKey, {
            expiresIn: 7200,
          });
          res.status(200).send({
            auth: true,
            token,
            message: 'user found & logged in',
          });
        });
      }
    })(req, res, next);
  })
}