import users from "../../../utils/users";

export default (req, res) => {
  const id = req.query.id;

  const user = users.find(user => user.id === id);

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(user));
};
