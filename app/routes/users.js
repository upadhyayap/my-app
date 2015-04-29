
import Ember from 'ember';

Ember.Logger.log('inside users route');
export default Ember.Route.extend({

  model: function(){
    return this.store.find('user');
  }

});

