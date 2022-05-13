////////////////////imports//////////////////

const { User, event } = require("../models");

/////////For auth//////////////

const middleware = require("../middleware");

const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { userName: req.body.userName },
      raw: true,
    });
    if (
      user &&
      (await middleware.comparePassword(user.passwordDigest, req.body.password))
    ) {
      let payload = {
        id: user.id,
        userName: user.userName,
      };
      let token = middleware.createToken(payload);
      return res.send({ user: payload, token });
    }
    res.status(401).send({ status: "Error", msg: "Unauthorized" });
  } catch (error) {
    throw error;
  }
};

const Register = async (req, res) => {
  try {
    const { email, password, firstName, city, state, userName, about, sex } =
      req.body;
    let passwordDigest = await middleware.hashPassword(password);
    const user = await User.create({
      email,
      passwordDigest,
      firstName,
      sex,
      userName,
      about,
      city,
      state,
    });
    res.send(user);
  } catch (error) {
    throw error;
  }
};

const CheckSession = async (req, res) => {
  console.log("--------------this is res.locals", res.locals);
  try {
    const { payload } = await res.locals;
    res.send(payload);
  } catch (error) {
    throw error;
  }
};

////////////////////controller variables//////////////////

const GetProfiles = async (req, res) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (error) {
    throw error;
  }
};

const GetUserProfile = async (req, res) => {
  try {
    const userAndevents = await User.findByPk(req.params.id, {
      include: [{ model: event, as: "events" }],
    });
    res.send(userAndevents);
  } catch (error) {
    throw error;
  }
};

////////////////////exports//////////////////

module.exports = {
  GetProfiles,
  GetUserProfile,
  Login,
  Register,
  CheckSession,
};
