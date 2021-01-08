const { User } = require("../../../models");

module.exports = async (req, res) => {
  const usersIds = req.query.user_ids || [];

  const sqlOptions = {
    attributes: ["id", "name", "email", "role", "profession", "avatar"],
  };

  if (usersIds.length) {
    sqlOptions.where = {
      id: usersIds,
    };
  }

  const users = await User.findAll(sqlOptions);

  return res.json({
    status: "success",
    data: users,
  });
};
