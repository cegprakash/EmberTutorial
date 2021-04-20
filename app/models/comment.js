import DS from 'ember-data';

export default DS.Model.extend({
    from_user_id: DS.belongsTo('user', {'inverse': null}),
    to_user_id: DS.belongsTo('user', {'inverse': null}),
    comment: DS.attr('string'),
    created_at: DS.attr('date'),
});
