import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['name'],
  sortAscending: true,
  
  usersCount: function(){
   Ember.Logger.log('count lenth called');
    return this.get('model.length');
  }.property('@each')

});

