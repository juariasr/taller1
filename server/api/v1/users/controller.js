const Model = require("./model");

exports.all = async (req, res, next) => {
    try {
      const data = await Model.find({}).exec();
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
    document._status = true;
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
      dataModify.firstname = body.firstname;
      dataModify.lastname = body.lastname;
      dataModify.email = body.email;
      dataModify.updatedAt = new Date();   
      const data = await dataModify.save(); 
      res.json({ data: data });
    } catch (error) {
      next(error);
    } 
  };

exports.disable = async (req, res, next) => { 
    const { params = {} } = req;
    try {
      const dataModify = await Model.findById(params.id).exec();
      dataModify.updatedAt = new Date();
      dataModify._status = false;
      const data = await dataModify.save(); 
      res.json({ data: data });
    } catch (error) {
      next(error);
    } 
};
