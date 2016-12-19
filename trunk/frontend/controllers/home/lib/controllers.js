'use strict';

function index(app) {
	app.get('/', (req, res) => {
		res.render('home/index.pug', {
			title: "Home Page"
		});
	});
}

exports = module.exports = [
	index
];