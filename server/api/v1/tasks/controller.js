const Model = require("./model");
let data = [];

exports.all = async (req, res, next) => {
  try {
    const data = await Model.find({}).exec();
    res.json({ data: data });
  } catch (error) {
    next(error);
  }
};

exports.get = (req, res, next) => {
  const { params = {} } = req;
  const { id = "" } = params;

  const task1 = data.find(function (item) {
    return item.id == id;
  });

  res.json({
    task1,
  });
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
  // res.json({ method: "put" });
  const { body = {} } = req;
  const { id = -1 } = body;
  const { description = " " } = body;
  const { author = " " } = body;
  let updated = false;

  if (id === -1) {
    next({
      statusCode: 501,
      message: "Task Id not found inside body or is blank",
    });
  }

  objIndex = data.findIndex((obj) => obj.id == id);
  if (objIndex === -1) {
    next({
      statusCode: 504,
      message: `No task found by id ${id} `,
    });
  }

  if (description !== " ") {
    data[objIndex].description = description;
    updated = true;
  }

  if (author !== " ") {
    data[objIndex].author = author;
    updated = true;
  }

  if (updated === true) {
    data[objIndex].updatedAt = new Date();
    res.json({ message: "Task Updated." });
  } else {
    res.json({ message: "No data Updated." });
  }
};

exports.delete = (req, res, next) => {
  const { params = {} } = req;
  const { id = "" } = params;

  data = data.filter((data) => data.id != id);

  res.json({ message: "User Delete" });
};
