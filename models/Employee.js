/**
 * Employee Model Definition
 */
module.exports = function(db) {

	var Employee = db.define('employee', {
		fname : {
			type : 'text',
			size : 255,
			required : true
		},
		mname : {
			type : 'text',
			size : 255,
			required : true
		},
		lname : {
			type : 'text',
			size : 255,
			required : true
		},
		address : {
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
	
	var Position = require('./Position')(db);

	// define the db constraints
	Employee.hasOne('position', Position, { reverse: 'employee', required: true });
	
	Employee.sync(function(err) {

	});

	return Employee;

};