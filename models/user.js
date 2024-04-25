const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

const userSchema = new mongoose.Schema({
    firstName: {type: String, required: True},
    lastName: {type: String, required: True},
    email: {type: String, required: True},
    password: {type: String, required: True},
});

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id}, process.env.JWTPRIVATEKEY, {expiresIn: "7d" })
    return token
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().required().label("First Name"),
        firstName: Joi.string().required().label("First Name"),
        firstName: Joi.string().required().label("First Name"),
    })
}