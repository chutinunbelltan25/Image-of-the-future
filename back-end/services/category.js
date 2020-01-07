const passport = require('passport');
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

module.exports = (app, db) => {

	app.get('/category', async (req, res) => {
        db.categorys
		.findAll({
        })
        .then(result => {
          res.status(200).json(result);
        })
        .catch(error => {
          res.status(400).json({ message: error.message });
        });
	})
}