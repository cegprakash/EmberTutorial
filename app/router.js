import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('user', function() {
    this.route('index', { path: '' });
    this.route('show', { path: '/:user_id' });
 });

  this.route('not-found', { path: '/*path' });
});

export default Router;
