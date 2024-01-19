const salam = require("./../models/productModel");

const getAllsalam = async (req, res) => {
  let found = await salam.find({});
  res.send(found);
};

const getsalamid = async (req, res) => {
  console.log(req.params.id);
  const found = await salam.findOne({ _id: req.params.id });
  console.log(found);
  res.send(found);
};

const deletesalam = async (req, res) => {
  const deleted = await salam.findByIdAndDelete({ _id: req.params.id });
};
const postsalam = async (req, res) => {
  const newsalam = new salam(req.body);
  newsalam.save();
};

module.exports = {
  getAllsalam,
  getsalamid,
  deletesalam,
  postsalam,
};
