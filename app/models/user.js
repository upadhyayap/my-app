 import DS from "ember-data";
 
 var user = DS.Model.extend({
  name         : DS.attr("string"),
  email        : DS.attr("string"),
  bio          : DS.attr("string"),
  avatarUrl    : DS.attr("string"),
  creationDate : DS.attr("date")
 });
 
 export default user;
