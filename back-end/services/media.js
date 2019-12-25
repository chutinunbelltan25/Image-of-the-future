const passport = require('passport');
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

module.exports = (app, db) => {
  app.post('/create-uploadPic', passport.authenticate('jwt', { session: false }),
    function (req, res) {
      // Lab 1
      db.upload.create({
        media_url: req.body.message,
        media_name: req.body.image_url,
        text: req.user.id,
        status
        
      })
        .then(result => {
          res.status(201).send(result)
        })
        .catch(err => {
          res.status(400).send({ message: err.message })
        })
    }
  )
}
