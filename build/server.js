"use strict";
exports.__esModule = true;
var app_1 = require("./app");
var port = process.env.PORT || 3000;
app_1.app.listen(port);
console.log('Identity server started on: ' + port);
//# sourceMappingURL=server.js.map