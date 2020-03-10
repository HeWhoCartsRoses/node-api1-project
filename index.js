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
let id = "a_unique_id";
const port = 5000;
const key = "/api/users";
server.get(key, (req, res) => {
  if (req != null) res.status(200).json(temp);
  else res.status(404);
});
server.post(key, (req, res) => {
  const info = req.body;
  if (info.name === undefined || info.bio === undefined) {
    res
      .status(400)
      .json({ errorMessage: "Please provide name and bio for the user." });
  } else {
    info.id = shortid.generate();
    temp.push(info);
    res.status(201).json(temp);
  }
});
server.listen(port, () =>
  console.log(`\n**API on http://localhost:${port}**\n`)
);
//for getting the id, i think(?)
// server.get(key+id, (req,res)=>{

// })
