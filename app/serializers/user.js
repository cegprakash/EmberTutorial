import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
    attrs: {        
        comments_received: {
            serialize: 'records',
            deserialize: 'records'            
        }
    }
});
