var ContactManager = new Marionette.Application();
var EmployeeManager = new Marionette.Application();

EmployeeManager.addRegions({
  mainRegion: "#main-region"
});

EmployeeManager.on("initialize:after", function(){
	EmployeeManager.EmployeeApp.List.Controller.listEmployee();
});