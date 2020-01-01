const passport = require('passport');
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

module.exports = (app, db) => {

	app.get('/keywords', async (req, res) => {
		try {
			const keywords = await db.keywords.findAll();
			res.send(keywords)
		} catch(err) {
			res.status(400).send(err.message)
		}
		
	})
}