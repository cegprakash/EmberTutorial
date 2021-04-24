import DS from 'ember-data';

export default DS.Model.extend({
    from_user: DS.belongsTo('user', {'inverse': null}),
    to_user: DS.belongsTo('user', {'inverse': 'comments_received'}),
    comment: DS.attr('string'),
    created_at: DS.attr('date'),
});
