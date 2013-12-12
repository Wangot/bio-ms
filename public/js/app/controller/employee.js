EmployeeManager.module("EmployeeApp.List", function(List, EmployeeManager, Backbone, Marionette, $, _){
  List.Controller = {
    listEmployee: function(){
      var processingEmployee = EmployeeManager.request("employee:entities");

      $.when(processingEmployee).done(function(employees){
	      var employeeListView = new List.Employee({
	        collection: employees
	      });
	      
	      EmployeeManager.mainRegion.show(employeeListView);
      });
    }
  };
});
