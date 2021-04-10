import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        const {user_id} = params;
        return user_id;
    }
});
