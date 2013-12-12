EmployeeManager.module("Entities", function(Entities, EmployeeManager, Backbone, Marionette, $, _){
  Entities.Employee = Backbone.Model.extend({});

  Entities.EmployeeCollection = Backbone.Collection.extend({
    model: Entities.Employee,
    comparator: "firstName",
    url: "/employee"
  });

  var employees;

  var initializeEmployee = function(){
	  /*employees = new Entities.EmployeeCollection([
      { id: 1, firstName: "Alice", lastName: "Arten", phoneNumber: "555-0184" },
      { id: 2, firstName: "Bob", lastName: "Brigham", phoneNumber: "555-0163" },
      { id: 3, firstName: "Charlie", lastName: "Campbell", phoneNumber: "555-0129" }
    ]);*/
	  
	  console.log(employees);
  };

  var API = {
    getEmployeeEntities: function(){
    	var empCol = new Entities.EmployeeCollection();
        var defer = $.Deferred();
  	  	empCol.fetch({
  		  success: function(data){
  			  defer.resolve(data);
  		  }
  	  	});

  	  return defer.promise();
    }
  };

  EmployeeManager.reqres.setHandler("employee:entities", function(){
    return API.getEmployeeEntities();
  });
});
