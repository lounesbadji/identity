import * as AuthModule from '../controllers/userController';

export function auth (app) {
	app.route('/auth/register').post(AuthModule.register);
	app.route('/auth/login').post(AuthModule.login);
}
