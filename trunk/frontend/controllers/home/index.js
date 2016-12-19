/**
 * Created by taoxin on 2016/12/19.
 */
'use strict';

var controllers = require('./lib/controllers');

function initPages(app) {
	controllers.forEach(item => {
		item(app);
	});
}

exports = module.exports = initPages;