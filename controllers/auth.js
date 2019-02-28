module.exports.login = function (req, res) {
    res.status(200).json({
        login: req.body
    });
};

module.exports.registration = function (req, res) {
    res.status(200).json({
        message: 'registration success!! uhaha'
    });
};