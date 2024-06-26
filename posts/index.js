const express = require("express");
const bodyPArser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyPArser.json());
app.use(cors());

const port = 4000;
const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts/create", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  posts[id] = { id, title };
  await axios.post("http://event-bus-srv:4005/events", {
    // await axios.post("http://localhost:4005/events", {
    type: "PostCreated",
    data: {
      id,
      title,
    },
  });

  res.status(200).send(posts[id]);
});

app.post("/events", (req, res) => {
  console.log("Recived Events", req.body.type);
  res.send({});
});

app.listen(port, () => {
  console.log("v55 latest change yeah v1000");
  console.log(`listening on port ${port}`);
});
