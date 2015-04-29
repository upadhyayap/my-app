import Ember from 'ember';
Ember.Logger.log('inside Edit controller');
export default  Ember.Controller.extend({
  actions: {
    save: function(){
      var user = this.get('model');
      // this will tell Ember-Data to save/persist the new record
      user.save();
      // then transition to the current user
      this.transitionToRoute('user', user);
    }
  }
});

