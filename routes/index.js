/*
 * Load routes here.
 */
var routes = require('./');



var utilities = require('./../models/helper/ViewUtilities');

module.exports = function(app){
	app.get('/', function(req, res){
		res.render('index', { title: 'Express', body: 'eman'});
	});
	app.get('/main', require('./employee/browse'));
	app.get('/users', require('./employee'));
	app.get('/contact', require('./contact/browse'));
	app.get('/position', function(req, res){
		res.render('position', { title: 'Position' });
	});
	
	app.post('/position', function(req, res){
		console.log(req.db);

		var position = require('../models/Position')(req.db);
		position.create( req.body, function(err, pos){
			if(err){
				console.log(err);
			}else{
				console.log(pos);
			}
		});
		res.send("hello");
	});
	
	app.get('/test', function(req, res){
		var website = require('../models/Website')(req.db);
		website.create( {name: "John"}, function(err, web){
			console.log(err);
			console.log(web);
		});
		
		res.send("hello");
	});

	app.post('/employee', function(req, res){
		console.log(req.body);
		console.log(req.param('fname', null));

		var employee = require('../models/Employee')(req.db);
		employee.create( req.body, function(err, web){
			console.log(err);
			console.log(web);
		});

		res.send("hello");
	});

	app.get('/employee', function(req, res){
		console.log(req.body);
		res.send([{ id: 1, firstName: "Alice", lastName: "Arten", phoneNumber: "555-0184" }, { id: 2, firstName: "Bob", lastName: "Brigham", phoneNumber: "555-0163" }, { id: 3, firstName: "Charlie", lastName: "Campbell", phoneNumber: "555-0129" }, { id: 4, firstName: "Buena", lastName: "Leynes", phoneNumber: "555-0129" }]);
	});

};

/*exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};
*/