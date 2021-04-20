import DS from 'ember-data';

export default DS.Model.extend({
    from_user_id: DS.belongsTo('user'),
    to_user_id: DS.attr(),
    comment: DS.attr('string'),
    created_at: DS.attr('date'),
});
