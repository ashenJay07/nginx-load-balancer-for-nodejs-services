const os = require("os");
const express = require("express");
const app = express();
const port = 3000;

// os.hostname() = container ID
const instance = process.env.INSTANCE || os.hostname();

app.get("/", (req, res) => {
  res.send(`Hello from instance: ${instance}`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
