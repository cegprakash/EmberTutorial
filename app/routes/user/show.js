import Route from '@ember/routing/route';

export default Route.extend({
    async model(params) {
        const { user_id } = params;
        if(user_id) {
            const user = await this.store.findRecord('user', user_id);           
            return user;
        }
        return null;
    }
});
