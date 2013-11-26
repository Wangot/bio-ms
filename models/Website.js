/**
 * Website Model Definition
 */
module.exports = function(db) {

	var Website = db.define('website', {
		name : {
			type : 'text',
			size : 255,
			required : true
		}
	}, {
		hooks : {
			beforeCreate : function() {
				//var that = this;
				//that.created = new Date();
			},
			beforeSave : function() {
				//var that = this;
				//that.updated = new Date();
			}
		}
	});

	Website.sync(function(err) {

	});

	return Website;

};