"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AuthModule = require("../controllers/userController");
function auth(app) {
    app.route('/auth/register').post(AuthModule.register);
    app.route('/auth/login').post(AuthModule.login);
}
exports.auth = auth;
//# sourceMappingURL=authRoutes.js.map