const path = require("path");
const express = require("express");
const router = express.Router();

//Displays "Hello World!" when the user goes to http://localhost:8000/
router.get("/", (req, res) => res.send("<h1>Hello World!<h1>"));

//Displays an about page when the user goes to http://localhost:8000/about
router.get("/about", (req, res) => res.send("<h1>This is the about page</h1>"));

// Displays a contact page when user goes to http://localhost:8000/contact
router.get("/contact", (req, res) => res.send("<h1>This is contact page</h1>"));

//Displays the date and time when the user goes to http://localhost:8000/date
router.get("/date", (req, res) => {
  res.send(`<h1>Today's date is ${new Date().toLocaleDateString()}, and the time is ${new Date().toLocaleTimeString()}</h1>`)
});

//Displays "Welcome (n), where (n) is a user input in http://localhost:8000/welcome/(n)"
router.get("/welcome/:name", (req, res) => {
  const name = req.params.name;
  res.send(`<h1>Welcome, ${name}!</h1>`);
});

//Displays use of a chain to show two messages, when the user visits http://localhost:8000/chain
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
