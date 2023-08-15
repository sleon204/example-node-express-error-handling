const express = require("express");
const app = express();


const checkForAbbreviationLength = (req, res,next) => {
  const abbreviation = req.params.abbreviation;
  if (abbreviation.length !== 2) {
    next(`State abbreviation "${abbreviation}" is invalid.`);
  } else {
    next();
  }
    


};


app.get("/states/:abbreviation", checkForAbbreviationLength, (req, res, next) => {
  const abbreviation = req.params.abbreviation;
    res.send(`${abbreviation} is a nice state, I'd like to visit.`);
});


app.get("/travel/:abbreviation", checkForAbbreviationLength, (req,res,next) => {
  const abbreviation = req.params.abbreviation;
    res.send(`Enjoy your trip to ${abbreviation}!`);
});


app.use((req, res, next) => {
  res.send(`The route ${req.path} does not exist!`);
});


app.use((err, req, res, next) => {
  console.error(err);
  res.send(err);
});


module.exports = app;
