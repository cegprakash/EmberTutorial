import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    comments_received: DS.hasMany('comment'),
});
