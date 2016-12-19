'use strict';

function set(app) {
	app.set('views', '../views');
	app.set('view engine', 'pug');
}

function startServer(app) {
	var server = app.listen(80, 'mac.taojihede.com', function() {
    	var host = server.address().address;
    	var port = server.address().port;

    	console.log('Example app listening at http://%s:%s', host, port);
	});
}

exports = module.exports = {
	set: set,
	startServer: startServer
};