export default Ember.Controller.extend({
    actions: {
        submitForm(value, event) {
        if (event.keyCode === 13) {
            console.log('postComment called');

            Ember.$.ajax({
                url: 'http://localhost:3000/api/v1/comments',
                type: "POST",
                data: {
                    "from_user_id": 2,
                    "to_user_id": 3,
                    "comment": value,
                }                
            }).then(function(resp){
                window.location.reload(true);
            }).catch(function(error){
            });            

        }
        }
    }
});
