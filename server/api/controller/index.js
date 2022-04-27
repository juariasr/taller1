exports.all = (req, res, next) => {
  res.json({ method: "all" });
};

exports.get = (req, res, next) => {
  res.json({ method: "get" });
};

exports.post = (req, res, next) => {
  res.json({ method: "post" });
};

exports.put = (req, res, next) => {
  res.json({ method: "put" });
};

exports.delete = (req, res, next) => {
  res.json({ method: "delete" });
};
