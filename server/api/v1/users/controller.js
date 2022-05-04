

exports.all = (req, res, next) => {
    res.json({ message: "all" });
};

exports.get = (req, res, next) => {
    res.json({ message: "get" });
};

exports.post = (req, res, next) => {
    res.json({ message: "post" });
};

exports.put = (req, res, next) => {
    res.json({ message: "put" });
};

exports.disable = (req, res, next) => {
    res.json({ message: "disable" });
};
