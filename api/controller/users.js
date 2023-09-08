// const { getUsers, getUserByID, insertUser, deleteUserByID, updateUserByID} =require("../model/users.js")
// // const {bcrypt} = require('bcrypt');
// const bcrypt = require('bcrypt')
// const {createToken} = require('../middleware/AuthenticateUser.js')


// // Get All Users
// const showUsers = (req, res) => {
//     getUsers((err, results) => {
//         if (err){
//             res.send(err);
//         }else{
//             res.json(results);
//         }
//     });
// }

// // Get Single User 
// const showUserById = (req, res) => {
//     getUserByID(req.params.id, (err, results) => {
//         if (err){
//             res.send(err);
//         }else{
//             res.json(results);
//         }
//     });
// }


// // app.post('/Users, (req, res) => {
// //     try {
// //       const hashedPassword = bcrypt.hash(req.body.password, 10)
// //       const userData = {
// //         fullname: req.body.fullname,
// //         email: req.body.email,
// //         username: req.body.username,
// //         password: hashedPassword
// //     };
// //     const createUser = 'INSERT INTO Users SET ?';
// //   con.query(sql, userData, (err, result) => {
// //       if (err) {
// //           console.error('Database error:', err);
// //           res.status(500).send('Error during registration');
// //       } else {
// //           res.redirect('/login');
// //       }
// //   });
// // Add New User
// const createUser = (req, res) => {
//   const data = req.body;
//   data.userPass = bcrypt.hashSync(data.userPass, 10);
//   const user = {
//     emailAdd: data.emailAdd,
//     userPass: data.userPass,
//   };
//   let token = createToken(user);
//   // if (!data.userPass) {
//   //   return res.status(400).json({ error: "Password is required." });
//   // }
   
//   // Check if userPass is provided in the request body
//   insertUser(data, (err, results) => {
//     if (err) throw err;
//     res.cookie("authorizedUser", token, {maxAge: 3600000, httpOnly: true});
//     res.json({results, token})
//   });
// };

// // delete a user
// const deleteUser = (req, res) => {
//     const id = req.params.id;
//     deleteUserByID(id, (err, results) => {
//       if (err) {
//         res.send(err);
//       } else {
//         res.json(results);
//       }
//     });
//   };

//   // update a user
// const updateUser = (req, res) => {
//     const id = req.params.id;
//     const data = req.body;
//     updateUserByID(id, data, (err, results) => {
//       if (err) {
//         res.send(err);
//       } else {
//         res.json(results);
//       }
//     });
//   };

//   const userLogin = (req, res) => {
//     const { emailAdd, userPass } = req.body;
//     const query = `SELECT firstName, lastName, userAge, gender, userRole, emailAdd, userPass FROM usersTable WHERE emailAdd = '${emailAdd}'`;
//     db.query(query, async (err, result) => {
//       if (err) throw err;
//       if (!result?.length) {
//         res.json({
//           status: res.statusCode,
//           message: "Incorrect email address!",
//         });
//       } else {
//         await compare(userPass, result[0].userPass, (cErr, cResult) => {
//           if (cErr) throw cErr;
//           // create token
//           const token = createToken({
//             emailAdd,
//             userPass,
//           });
//           // save token
//           res.cookie("LegitUser", token, {
//             maxAge: 3600000,
//             httpOnly: true,
//           });
//           if (cResult) {
//             res.json({
//               message: "You can now enter another time",
//               token,
//               result: result[0],
//             });
//           } else {
//             res.json({
//               status: res.statusCode,
//               message: "Unregistered user or incorrect password!",
//             });
//           }
//         });
//       }
//     });
//   };
  
//   module.exports = {
//     showUsers,
//     showUserById,
//     createUser,
//     deleteUser,
//     updateUser,
//     userLogin
//   };

// const db = require("../config");
// const { hash, compare, hashSync } = require("bcrypt");
// const { createToken } = require("../middleware/Authentication");
// class users {
//   fetchUsers(req, res) {
//     const query = `SELECT userID, firstName, lastName, userAge, gender, userRole, emailAdd, profileUrl FROM users;`;
//     db.query(query, (err, results) => {
//       if (err) throw err;
//       res.json({
//         status: res.statusCode,
//         results,
//       });
//     });
//   }
//   fetchUser(req, res) {
//     const query = `
//         SELECT userID, firstName, lastName, userAge, gender, userRole, emailAdd, profileUrl
//         FROM users
//         WHERE userId = ${req.params.id};
//         `;
//     db.query(query, (err, result) => {
//       if (err) throw err;
//       res.json({
//         status: res.statusCode,
//         result,
//       });
//     });
//   }
//   async register(req, res) {
//     const data = req.body;
//     //encrypt password
//     data.userPass = await hash(data.userPass, 15);
//     const user = {
//       emailAdd: data.emailAdd,
//       userPass: data.userPass,
//     };
//     //query
//     const query = `
//       INSERT INTO users
//       SET ?;
//       `;
//     db.query(query, [data], (err) => {
//       if (err) throw err;
//       //create a token
//       let token = createToken(user);
//       res.json({
//         status: res.statusCode,
//         msg: "You are now registered.",
//       });
//     });
//   }
//   login(req, res) {
//     const { emailAdd, userPass } = req.body;
//     const query = `
//       SELECT userID, firstName, lastName, userAge, gender, userRole, emailAdd, profileUrl
//       FROM users
//       WHERE emailAdd = ?;
//     `;
//     db.query(query, [emailAdd], async (err, result) => {
//       if (err) throw err;
//       if (!result?.length) {
//         res.json({
//           status: res.statusCode,
//           msg: "You provided a wrong email.",
//         });
//       } else {
//         await compare(userPass, result[0].userPass, (cErr, cResult) => {
//           if (cErr) throw cErr;
//           // Create a token
//           const token = createToken({
//             emailAdd,
//             userPass,
//           });
//           if (cResult) {
//             res.json({
//               msg: "Logged in",
//               token,
//               result: result[0],
//             });
//           } else {
//             res.json({
//               status: res.statusCode,
//               msg: "Invalid password or you have not registered",
//             });
//           }
//         });
//       }
//     });
//   }
//   updateUser(req, res) {
//     const data = req.body;
//     if (data.userPass) {
//       data.userPass = hashSync(data.userPass, 15);
//     }
//     const query = `
//         UPDATE users
//         SET ?
//         WHERE userID = ?
//         `;
//     db.query(query, [data, req.params.id], (err) => {
//       if (err) throw err;
//       res.json({
//         status: res.statusCode,
//         msg: "The user record was updated.",
//       });
//     });
//   }
//   deleteUser(req, res) {
//     const query = `DELETE FROM users
//         WHERE userID = ?`;
//     db.query(query, [req.params.id], (err) => {
//       if (err) throw err;
//       res.json({
//         status: res.statusCode,
//         msg: "A user record was deleted.",
//       });
//     });
//   }
// }
// module.exports = users;
const {
  fetchUsers,
  fetchUserById,
  register,
  login,
  updateUser,
  deleteUser,
} = require("../model/users");
const showUsers = (req, res) => {
  
  fetchUsers((err, results) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(results);
    }
  });
};
const showUserById = (req, res) => {
  const id = req.params.id;
  fetchUserById(id, (err, result) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      if (!result) {
        res.status(404).json({ error: "User not found" });
      } else {
        res.json(result);
      }
    }
  });
};
const createRegister = (req, res) => {
  const data = req.body;
  register(data, (err, results) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json({ msg: "You are now registered." });
    }
  });
};
const loginUser = (req, res) => {
  const data = req.body;
  login(data, (err, results) => {
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
  updateUser(id, data, (err, results) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json({ msg: "The user record was updated." });
    }
  });
};
const deleteUserById = (req, res) => {
  const id = req.params.id;
  deleteUser(id, (err, results) => {
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
  createRegister,
  loginUser,
  updateUserById,
  deleteUserById,
};