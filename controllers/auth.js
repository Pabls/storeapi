const bcrypt = require('bcryptjs');

const User = require('../models/User');
const messages = require('../config/messages');
const codes = require('../config/httpCodes');

module.exports.login = async function (req, res) {
    if (!hasUserData(req)) {
        sendRequest(res, codes.BAD_REQUEST, messages.REQUIRED_PARAMETERS_NOT_PASSED);
    } else {
        let user = null;
        try {
            user = await User.findOne({ email: req.body.email });
        } catch (error) {
            sendRequest(res, codes.SERVICE_UNAVAILABLE, error);
            return;
        }
        if (equalsUsers(req.body.email, req.body.password, user)) {
            sendRequest(res, codes.OK, messages.SUCCESS_AUTH);
        } else {
            sendRequest(res, codes.NOT_FOUND, messages.USER_NOT_FOUND);
        }
    }
};

module.exports.registration = async function (req, res) {
    if (!hasUserData(req)) {
        sendRequest(res, codes.BAD_REQUEST, messages.REQUIRED_PARAMETERS_NOT_PASSED);
    } else {
        let candidate = null;
        try {
            candidate = await User.findOne({ email: req.body.email });
        } catch (error) {
            sendRequest(res, codes.SERVICE_UNAVAILABLE, error);
            return;
        }

        if (candidate && candidate.email) {
            sendRequest(res, codes.CONFLICT, messages.EMAIL_ALREDY_EXIST);
        } else {
            const user = new User({
                email: req.body.email,
                password: getDecodePassword(req.body.password)
            });

            try {
                await user.save();
                sendRequest(res, codes.CREATED, messages.USER_SUCCESFULL_ADDED);
            } catch (error) {

            }
        }
    }
};

function equalsUsers(email, password, userFromDb) {
    return email &&
        password &&
        userFromDb &&
        userFromDb.email === email &&
        bcrypt.compareSync(password, userFromDb.password);
}

function getDecodePassword(password) {
    let solt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, solt);
}

function sendRequest(res, statusCode, message) {
    res.status(statusCode).json({
        message: message
    });
}

function hasUserData(req) {
    return req && req.body && req.body.email && req.body.password;
}