const passport = require('passport');
const Sequelize = require('sequelize')
const Op = Sequelize.Op;
const _ = require('lodash');

module.exports =  (app, db) => {
  app.post('/admin_Reason/medias/:media_id', async (req, res) => {
    console.log('this is body', req.body)
    console.log('this is param', req.params.media_id)
    db.medias 
      .update({
        status: req.body.status,
        reason: req.body.reason,
        approve_date: new Date(),
      },{ where: { status: "in-progress", media_id: req.params.media_id}}
      )
      .then(result => {
        res.status(200).json(result);
      })
      .catch(error => {
        res.status(400).json({ message: error.message });
      })
  })
  //-ข้างบนทำรวม3ตาราง
  app.get('/media_approve', async (req, res) => {
    db.medias
      .findAll({
        where: { status: "approve" }
      })
      .then(result => {
        res.status(200).json(result);
      })
      .catch(error => {
        res.status(400).json({ message: error.message });
      });
  })
  app.get('/admin_for_approve', async (req, res) => {
    db.medias
      .findAll({
        where: { status: "in-progress" }
      })
      .then(result => {
        res.status(200).json(result);
      })
      .catch(error => {
        res.status(400).json({ message: error.message });
      });
  })
  app.get('/media_approve/user/:user_id', async (req, res) => {
    db.medias
      .findAll({
        where: { status: "approve", user_id: req.params.user_id }
      })
      .then(result => {
        res.status(200).json(result);
      })
      .catch(error => {
        res.status(400).json({ message: error.message });
      });
  })
  app.get('/media_reject/user/:user_id', async (req, res) => {
    db.medias
      .findAll({
        where: { status: "reject", user_id: req.params.user_id }
      })
      .then(result => {
        res.status(200).json(result);
      })
      .catch(error => {
        res.status(400).json({ message: error.message });
      });
  })
  app.get('/media_inprogress/user/:user_id', async (req, res) => {
    db.medias
      .findAll({
        where: { status: "in-progress", user_id: req.params.user_id }
      })
      .then(result => {
        res.status(200).json(result);
      })
      .catch(error => {
        res.status(400).json({ message: error.message });
      });
  })

  app.post('/create-uploadPic',
    passport.authenticate('jwt', { session: false }),
    function (req, res) {
      let url;
      if (!req.files) {
        res.send({
          status: false,
          message: "No file uploaded"
        });
      } else {
        //Use the name of the input field (i.e. "photo") to retrieve the uploaded file
        let photo = req.files.photos;
        let photoName = new Date().getTime() + ".jpeg";
        //Use the mv() method to place the file in upload directory (i.e. "uploads")
        photo.mv("./uploads/" + photoName);
        //send response
        url = `http://localhost:8080/${photoName}`
        db.medias.create({
          user_id: req.user.user_id,
          media_url: url,
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
            console.log(err.message)
            res.status(400).send({ message: err.message })
          })
      }
    }
  )
  app.post("/upload-photo",
    function (req, res) {
      // console.log(mv)
      db.medias.create
      try {
        if (!req.files) {
          res.send({
            status: false,
            message: "No file uploaded"
          });
        } else {
          //Use the name of the input field (i.e. "photo") to retrieve the uploaded file
          let photo = req.files.photos;
          let photoName = new Date().getTime() + ".jpeg";
          //Use the mv() method to place the file in upload directory (i.e. "uploads")
          photo.mv("./uploads/" + photoName);
          //send response
          res.send({
            status: true,
            message: "File is uploaded",
            data: {
              name: photoName,
              mimetype: photo.mimetype,
              size: photo.size
            }
          });
        }
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
    });

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


