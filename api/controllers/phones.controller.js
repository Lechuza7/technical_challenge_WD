const data = require("../data/phones.json");

module.exports.list = (req, res, next) => {
  res.json(data)
};

module.exports.detail = (req, res, next) => {
  const { id } = req.params;
  const phone = data.filter(phone => phone.id === id);
  res.json(phone);
};
