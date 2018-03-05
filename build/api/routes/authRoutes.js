"use strict";
exports.__esModule = true;
var AuthModule = require("../controllers/userController");
function auth(app) {
    app.route('/auth/register').post(AuthModule.register);
    app.route('/auth/login').post(AuthModule.login);
}
exports.auth = auth;
//# sourceMappingURL=authRoutes.js.map