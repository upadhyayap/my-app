import Ember from 'ember';

Ember.Logger.log('inside create route');

export default Ember.Route.extend({

  model: function(){
    // the model for this route is a new empty Ember.Object
    Ember.Logger.log('inside create model hook');
    return this.store.createRecord('user');
  },

  // in this case (the create route), we can reuse the user/edit template
  // associated with the usersCreateController
  renderTemplate: function(){
  Ember.Logger.log('Entered in render template');
    this.render('user.edit', {
      controller: 'users.create'
    });
  }
});
