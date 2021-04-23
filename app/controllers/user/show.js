import Controller from '@ember/controller'; 
import $ from 'jquery';

export default Controller.extend({
    actions: {
        submitForm(value, event) {
        if (event.keyCode === 13) {
            $.ajax({
                url: `http://localhost:3000/api/v1/users/3/comments`,
                type: "POST",
                data: {
                    "user":{
                        "comment": {
                            "from_user_id": 2,
                            "comment": value,
                        }
                    }
                }                
            }).then(function(){
                window.location.reload(true);
            }).catch(function(){
            });
        }
        }
    }
});
