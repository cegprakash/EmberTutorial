import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        const {user_id} = params;
        if(user_id) {
            return 'User '+user_id;
        }
        return '';
    }
});
