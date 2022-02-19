const upload = require("./upload");
const express = require("express")
const { urlencoded } = require('express');
const app = express()
const http = require('http')
const Stream = require('stream').Transform;
const fs = require('fs');
const dotenv = require('dotenv')
dotenv.config()

app.use(express.json())
app.use(urlencoded({ extended: false }))

app.get("/", (req, res) => {
  res.json({
    message: process.env.TEST,
  });
});

app.get("/hello", (req, res) => {
  res.json({
    message: "지라연동 커밋 테스트, 브랜치 및 커밋",
  });
});

app.post("/multer", upload.single('img'), (req, res) => {
  const image = req.file.location;
  console.log(image)
})

/* request body: { "img": "http://postfiles.pstatic.net/MjAyMjAyMTRfMTMg/MDAxNjQ0ODI0NTAyMTkz.ObOk294g3V53BRiAQnzK8c536a2FCJxeKbvD_txcdowg.Af0cOVeKt-Nk-qCMoGLajManffDbL4zHmbpEt7PODNYg.PNG.catalyst88/%EC%98%A4%EB%A0%8C%EC%A7%80%EB%B3%B4%EB%93%9C-logo(%EC%83%81%ED%95%98)_ccexpress.png?type=w773" } */
app.post("/download", (req, res) => {
  console.log(req.body.img)
  var url = req.body.img;

  http.request(url, function (response) {
    var data = new Stream();

    response.on('data', function (chunk) {
      data.push(chunk);
    });
    response.on('end', function (c) {
      fs.writeFileSync('image.png', data.read());
    });
  }).end();
})

app.listen(80, () => {
  console.log("Server starting on port 80");
});
