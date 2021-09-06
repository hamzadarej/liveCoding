const checkPassConf = async (req, res, next) => {
  const password = await req.body.pass;
  const passwordConf = await req.body.passConf;
  if (password == passwordConf) {
    return res.status(400).json({ message: "false passConf repeat please" });
  }
  next();
};
module.exports = checkPassConf;
