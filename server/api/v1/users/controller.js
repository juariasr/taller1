const Model = require("./model");

exports.all = async (req, res, next) => {
    try {
      const data = await Model.find({}).exec();
      res.json({ data: data });
    } catch (error) {
      next(error);
    }
  };

exports.get = (req, res, next) => {
    res.json({ message: "get" });
};

exports.post = async (req, res, next) => {

    const { body = {} } = req;
    const document = new Model(body);
    document.createdAt = new Date();
    document.updatedAt = new Date();
    try {
      const data = await document.save();
      res.status(201);
      res.json({ data: data });
    } catch (error) {
      next(error);
    }
};

exports.put = (req, res, next) => {
    res.json({ message: "put" });
};

exports.disable = (req, res, next) => {
    res.json({ message: "disable" });
};
