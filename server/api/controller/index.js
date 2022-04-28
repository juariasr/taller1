let data = [];

exports.all = (req, res, next) => {
  res.json({ data: data });
};

exports.get = (req, res, next) => {
  const { params = {} } = req;
  const { id = "" } = params;

  const task1 = data.find(function (item) {
    return item.author === id;
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

  if (id === -1) {
    next({
      statusCode: 501,
      message: "Task Id not found in body Data.",
    });
  }

  let task = {
    id: body.id,
    description: body.description,
    author: body.author,
  };

  objIndex = data.findIndex((obj) => obj.id == task.id);

  // Log object to Console.
  console.log("Before update: ", data[objIndex]);

  // Update object's name property.
  data[objIndex].description = task.description;
  data[objIndex].author = task.author;
  data[objIndex].updatedAt = new Date();

  // Log object to console again.
  console.log("After update: ", data[objIndex]);

  res.json({ message: "Task Updated" });
};

exports.delete = (req, res, next) => {
  const { params = {} } = req;
  const { id = "" } = params;

  const task1 = data.find(function (item) {
    return item.author === id;
  });

  data = data.filter((data) => data.author !== id);

  res.json({ message: "Task Deleted" });
};
