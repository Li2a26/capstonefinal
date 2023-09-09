
const users = require("../model/users");
const Users = new users();
const showUsers = (req, res) => {
  Users.fetchUsers((err, results) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json({
        status: res.stausCode,
        results,
      });
    }
  });
};
const showUserById = (req, res) => {
  const id = req;
  Users.fetchUser(id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
        res.json({
          status: res.statusCode,
          result,
        });      
    }
  });
};
// const createRegister = (req, res) => {
//   const data = req.body;
//   Users.register(data, (err, results) => {
//     if (err) {
//       res.status(500).json({ error: "Internal server error" });
//     } else {
//       res.json({ msg: "You are now registered." });
//     }
//   });
// };
const loginUser = (req, res) => {
  const data = req.body;
  Users.login(data, (err, results) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      // Assuming `results` contains user information including user ID
      const id = results.userID;
      res.json({ msg: "Logged in", result: results });
    }
  });
};
const updateUserById = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Users.updateUser(id, data, (err, results) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json({ msg: "The user record was updated." });
    }
  });
};
const deleteUserById = (req, res) => {
  const id = req.params.id;
  Users.deleteUser(id, (err, results) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json({ msg: "A user record was deleted." });
    }
  });
};
module.exports = {
  showUsers,
  showUserById,
  // createRegister,
  loginUser,
  updateUserById,
  deleteUserById,
};