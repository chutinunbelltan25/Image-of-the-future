const passport = require('passport');
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

module.exports = (app, db) => {
  app.post('/create-uploadPic',
    passport.authenticate('jwt', { session: false }),
    function (req, res) {
      console.log(req.body)
      db.medias.create({
        user_id: req.user.user_id,
        media_url: req.body.media_url,
        media_name: req.body.media_name,
        text: req.body.text,
        status: "in-progress",
        reason: "",
        approve_date: "01-01-2000",
        number_of_download: "0"
      })
        .then(mediaResult => {
          db.categorys.create({
            category_name: req.body.category_name
          }).then(categoryResult => {
          db.incate.create({
              media_id: mediaResult.media_id,
              category_id: categoryResult.category_id
            })
          })
          db.keywords.create({
            keyword_name: req.body.keyword_name
          })
          .then(keywordResult => {
            db.inkey.create({
              media_id: mediaResult.media_id,
              keyword_id: keywordResult.keyword_id
            })
          })
          res.status(201).send(mediaResult)
        })
        .catch(err => {
          res.status(400).send({ message: err.message })
        })

    }
  )
  app.put('/upload-media/:media_id',
    passport.authenticate('jwt', { session: false }),
    function (req, res) {
      if (req.user.role == 'admin') {
        db.medias.update({
          status: req.body.status,
          reason: req.body.reason,
          approve_date: new Date(),
          number_of_download: "0"
        }, {
          where:
            { media_id: req.params.media_id }
        })
        .then(result => {
          res.status(201).send({ message: " admin update " })
        })
        .catch(err => {
          res.status(400).send({ message: err.message })
          })
      } else {
        res.status(401).send("unathorized")
      } 
    }
  )
}


