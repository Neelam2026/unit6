const express = require("express");
const rateLimit = require("express-rate-limit");

const app = express();


const limiter = rateLimit({
    windowMs: 1*60*1000, // 1 minutes
    max: 10, // Limit each IP to 10 requests per windowMs
    message: "You have 10 requests, please try again after 1 minute"
});


app.use(limiter); 

app.get("/", limiter, (req, res) => res.send("Hello World!"));


app.listen(3000, () => console.log(` listening on port 3000`));