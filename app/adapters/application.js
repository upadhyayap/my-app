import DS from 'ember-data';

var ApplicationAdapter = DS.RESTAdapter.extend({
    host: 'http://localhost:8080',
    namespace: 'emberApp/rest/my-app'
});

export default ApplicationAdapter;



