const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../Schema/user.schema");
const CryptoJS = require("crypto-js");
const app = express.Router();

// ---------- (Get Users) -------------
app.get("/", async (req, res) => {
  try {
    const user = await User.find();
    res.send({ user });
  } catch (e) {
    res.status(404).send(e);
  }
});

// ------------ (Sign Up) --------------
app.post("/signup", async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.send({ status: false, message: "Email Already Exist!" });
    } else {
      const user = await User.create({
        name: name,
        email: email,
        // password protect ------
        password: CryptoJS.AES.encrypt(password, "%$#@!").toString(),
        role: role,
      });
      return res.send({ status: true, message: "Sign up Successfully!" });
    }
  } catch (e) {
    res.status(404).send(e);
  }
});

// ------------ (Log in) --------------
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      //decrypt password using cryptoJS -----------------
      const decryptPass = CryptoJS.AES.decrypt(user.password, "%$#@!");
      const loginPassword = decryptPass.toString(CryptoJS.enc.Utf8);

      if (password === loginPassword) {

        // --- jwt ------
        const token = jwt.sign(
          {
            id: user._id,
            email: user.email,
            name: user.name,
            role: user.role,
          },
          "%$#@!",
          { expiresIn: "30 days" }
        );

        return res.send({
          token: token,
          status: true,
          message: "Log in Successfully!",
        });

      } else {
        return res.send({
          token: null,
          status: false,
          message: "Wrong Password!!",
        });
      }
    } else {
      return res.send({
        token: null,
        status: false,
        message: "Wrong Credential!!",
      });
    }
  } catch (e) {
    res.status(404).send(e);
  }
});

module.exports = app;
