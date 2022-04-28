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
  res.json({ method: "put" });
};

exports.delete = (req, res, next) => {
  res.json({ method: "delete" });
};
