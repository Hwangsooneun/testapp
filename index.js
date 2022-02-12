const bcrypt = require("bcrypt")
const app = require("express")();

app.get("/", (req, res) => {
  res.json({
    message: "Success!! and Docker test for ec2",
  });
});

app.get("/hello", (req, res) => {
  res.json({
    message: "지라연동 커밋 테스트, 브랜치 및 커밋",
  });
});

app.listen(3000, () => {
  console.log("Server starting on port 80");
});
