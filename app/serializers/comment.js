import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
    attrs: {
        from_user: {
            serialize: 'ids',
            deserialize: 'records',           
        }
    }
});
