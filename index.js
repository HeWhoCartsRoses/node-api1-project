const express = require("express");
const shortid = require("shortid");
const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "running..." });
});
let temp = [
  {
    id: "a_unique_id", // hint: use the shortid npm package to generate it
    name: "Jane Doe", // String, required
    bio: "Not Tarzan's Wife, another Jane" // String, required
  }
];
const port = 5000;
const key = "/api/users";
server.get(key, (req, res) => {
  res.status(200).json(temp);
});
server.post(key, (req, res) => {
  const info = req.body;
  info.id = shortid.generate();
  temp.push(info);
  res.status(201).json(temp);
});

server.listen(port, () =>
  console.log(`\n**API on http://localhost:${port}**\n`)
);
