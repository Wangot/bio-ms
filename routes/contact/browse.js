var utilities = require('./../../models/helper/ViewUtilities');

module.exports = function(req, res){
	var temp = __dirname + './../../views/contact.html';
	utilities.render(res, temp, { title: 'Express', filename: temp});
};