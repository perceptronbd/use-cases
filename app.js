const express = require("express");
const mongoose = require("mongoose");
const app = express();

console.log("hello simple test!");
console.log("Nice, it worsks!");

// Simple route
app.get("/", (req, res) => res.send("Hello from Docker!!!"));

app.listen(3000, () => console.log("Server running on port 3000"));
