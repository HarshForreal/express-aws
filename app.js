const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send(
    "Welcome To the world of Devops! This is the Second Version of Application"
  );
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
