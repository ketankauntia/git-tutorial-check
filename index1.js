const express = require("express");
const app = express();

app.use(cors());

app.get("/", function (req, res) {
  res.send(`Helloww`);
});

app.listen(3000);
