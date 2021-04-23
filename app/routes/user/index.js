import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        let users = this.get('store').findAll('user');
        return users;
    }
});
