"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var bcrypt = require("bcrypt");
var Schema = mongoose.Schema;
/**
 * User Schema
 */
var UserSchema = new Schema({
    fullName: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: true
    },
    hash_password: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    }
});
UserSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.hash_password);
};
exports.User = mongoose.model('User', UserSchema);
//# sourceMappingURL=userModel.js.map