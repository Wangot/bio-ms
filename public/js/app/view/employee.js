EmployeeManager.module("EmployeeApp.List", function(List, EmployeeManager, Backbone, Marionette, $, _){
  List.Employee = Marionette.ItemView.extend({
    tagName: "li",
    template: "#contact-list-item"
  });

  List.Employee = Marionette.CollectionView.extend({
    tagName: "ul",
    itemView: List.Employee
  });
});
