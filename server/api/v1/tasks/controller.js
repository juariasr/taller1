const Model = require("./model");

exports.all = async (req, res, next) => {
  try {
    const data = await Model.find({}).exec();
    res.json({ data: data });
  } catch (error) {
    next(error);
  }
};

exports.get = async (req, res, next) => {
  const { params = {} } = req;
  try {
    const data = await Model.findById(params.id).exec();
    res.json({ data: data });
  } catch (error) {
    next(error);
  }
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

exports.put = async (req, res, next) => {  
  const { body = {} } = req;  
  const { params = {} } = req;
  try {
    const dataModify = await Model.findById(params.id).exec();
    dataModify.description = body.description;
    dataModify.author = body.author;
    dataModify.updatedAt = new Date();   
    const data = await Model.findByIdAndUpdate(params.id, dataModify).exec(); 
    res.json({ data: data });
  } catch (error) {
    next(error);
  } 
};

exports.delete = async (req, res, next) => {
  const { params = {} } = req;
  try {
    const data = await Model.findByIdAndDelete(params.id).exec();
    res.json({ data: data });
  } catch (error) {
    next(error);
  }    
};
