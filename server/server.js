const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

const port = process.env.PORT || 3000;
app.use(express.static("dist"));
app.use(
  bodyParser.json({
    strict: false
  })
);
app.get('/test' (req, res) => {
  console.log('initial test works')
  res.send("doink")
});

app.listen(port, () => {
  console.log(`Best Buy Clone server active on port ${port}`);
});
