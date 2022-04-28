let data = [];

exports.all = (req, res, next) => {
  res.json({ data: data });
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

exports.post = (req, res, next) => {
  const { body = {} } = req;
  let task = {
    id: data.length + 1,
    description: body.description,
    author: body.author,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  data.push(task);
  res.json({ data: task });
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
