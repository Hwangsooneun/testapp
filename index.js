const bcrypt = require("bcrypt")
const app = require("express")();

app.get("/", (req, res) => {
  res.json({
    message: "Success!! and Docker test for ec2",
  });
});

app.get("/hello", (req, res) => {
  res.json({
    message: "hello1111",
  });
});

app.listen(3000, () => {
  console.log("Server starting on port 80");
});
