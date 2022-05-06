const { Model } = require("./model");

exports.all = async (req, res, next) => {
  try {
    const data = await Model.find({}).populate('author').exec();
    res.json({ data: data });
  } catch (error) {
    next(error);
  }
};

exports.get = async (req, res, next) => {
  const { params = {} } = req;
  try {
    const data = await Model.findById(params.id).populate('author').exec();
    res.json({ data: data });
  } catch (error) {
    next(error);
  }
};

exports.post = async (req, res, next) => {
  const { body = {} } = req;
  const document = new Model(body);  
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
    const data = await dataModify.save(); 
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
