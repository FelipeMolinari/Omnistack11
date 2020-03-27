const connections = require("../database/connections");
const crypto = require("crypto");

module.exports = {
  async index(req, res) {
    const ongs = await connections("ongs").select("*");
    return res.json(ongs);
  },

  async store(req, res) {
    const { name, email, wpp, city, uf } = req.body;

    const id = crypto.randomBytes(4).toString("HEX");

    await connections("ongs").insert({
      id,
      name,
      email,
      wpp,
      city,
      uf
    });

    res.json({ id });
  }
};
