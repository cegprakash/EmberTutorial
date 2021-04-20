import Route from '@ember/routing/route';

export default Route.extend({
    async model(params) {
        const { user_id } = params;
        console.log(user_id);

        if(user_id) {
            const user = await this.store.findRecord('user', user_id);

//            const user = await this.get(`http://localhost:3000/api/v1/users/{user_id}`);
            console.log(` USER : ${JSON.stringify(user)}`);
            return user;
        }

        return null;
    }
});