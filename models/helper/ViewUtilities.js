/**
 * data : 	{
 * 				title: string,
 * 				etc
 * 			}
 */
exports.render = function(res, template, data){
	var ejs = require('ejs');
	var fs = require('fs');
	var tmp = fs.readFileSync(template, 'utf8');
	var ret = ejs.render(tmp, data);

	res.render('index', { title: data.title, body: ret, filename: template});
};