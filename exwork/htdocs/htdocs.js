const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "htdocs")));

app.listen(port, () => {
  console.log(`Start http Server: http://localhost:{port}`);
});
