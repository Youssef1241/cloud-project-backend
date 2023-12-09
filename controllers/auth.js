const AuthService = require('../services/authentication');

module.exports.postUser = async (req, res) => {
  try {
    const userInfo = {
      username: req.body.username,
      password: req.body.password,
      fname: req.body.fname,
      lname: req.body.lname
    };

    const userExists = await AuthService.IsUserExist(userInfo.username);
    if (userExists) {

      return res.status(422).send({
        error: 'A user with the same username already exists.'
      });
    }

    await AuthService.createUser(userInfo);
  } catch (error) {
    res.status(500).send({
      error: error.msg
    });
  }
};

module.exports.postLogin = async (req, res) => {

  const { username, password } = req.body;
  try {
    const user = await AuthService.checkCredentials(username, password);

    if (!user) {
      return res.status(401).send({
        error:'Invalid Username or Password!'
      });
    }

    const jwt = await AuthService.generateJWT(user);
    res.send({
      userId: user._id,
      username: user.username,
      jwt: jwt,
      msg: 'Logged In Successfully.'
    });

  } catch (err) {
    res.status(500).send({
      error: error.msg
    });
  }
};