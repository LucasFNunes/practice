const AuthenticateService = require("../services/AuthenticateService");

async function auth(req, res) {
  const { email, password } = req.body;

  try {
    const { token, user } = await AuthenticateService.execute({
      email,
      password,
    });

    return res.send({ token, user });
  } catch (e) {
    return res.status(400).send({ error: "Usuário ou senha não encontrado." });
  }
}

module.exports = { auth };
