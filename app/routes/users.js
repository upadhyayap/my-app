
import Ember from 'ember';

Ember.Logger.log('inside users route');
export default Ember.Route.extend({

  model: function(){
    Ember.Logger.log('inside Model of users route');
    return this.store.find('user');
  }
});

