const { query } = require("./query");

const getLevel = levelID => {
  const sql = "SELECT * FROM levels WHERE levelID = ?";

  const values = [levelID];

  return query(sql, values);
};

module.exports = {
  getLevel
};
