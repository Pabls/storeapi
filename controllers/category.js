module.exports.getAll = function (req, res) {
    res.status(200).json({
        message: 'getAll success!! uhaha'
    });
};

module.exports.getById = function (req, res) {
    res.status(200).json({
        message: 'getById success!! uhaha'
    });
};

module.exports.remove = function (req, res) {
    res.status(200).json({
        message: 'delete success!! uhaha'
    });
};

module.exports.create = function (req, res) {
    res.status(200).json({
        message: 'add success!! uhaha'
    });
};

module.exports.update = function (req, res) {
    res.status(200).json({
        message: 'change success!! uhaha'
    });
};