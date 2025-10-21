const path = require("path");
const express = require("express");
const router = express.Router();


router.get("/", (req, res) => res.send("Hello World!"));


router.get("/about", (req, res) => res.send("<h1>This is the about page</h1>"));


router.get("/contact", (req, res) => res.send("<h1>This is contact page</h1>"));


router.get("/date", (req, res) => {
  res.send(`<h1>Today's date is ${new Date().toLocaleDateString()}, and the time is ${new Date().toLocaleTimeString()}</h1>`)
});

router.get("/welcome/:name", (req, res) => {
  const name = req.params.name;
  res.send(`<h1>Welcome, ${name}!</h1>`);
});

router.get("/chain", 
  (req, res, next) => {
    req.message = "<h1>This message is from the first handler!<h1>";
    next();
  },
  (req, res) => res.send(`<h1>And this is from the second.</h1><p>${req.message}</p>`)
);

router.get("/file", (req, res) => {
  const filePath = path.join(__dirname, "../fileToSend.html");
  res.sendFile(filePath);
});

module.exports = router;
