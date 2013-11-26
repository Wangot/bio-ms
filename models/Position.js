/**
 * Employee Model Definition
 */
module.exports = function(db) {

	var Position = db.define('position', {
		name : {
			type : 'text',
			size : 255,
			required : true
		},
		description : {
			type : 'text',
			big : true
		},
		created : {
			type : 'date',
			time : true
		}

	}, {
		hooks : {
			beforeCreate : function() {
				this.created = new Date();
			},
			beforeSave : function() {
				this.updated = new Date();
			}
		}
	});

	Position.sync(function(err) {

	});

	return Position;

};