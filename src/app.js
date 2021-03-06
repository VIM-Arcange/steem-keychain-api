const express = require("express");

const rpcRouter = require("./routes/rpc");
const delegationRouter = require("./routes/delegation");
const witnessRouter = require("./routes/witness");
var cors = require("cors");

// Express
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static("public", {dotfiles: "allow"}));
//CORS
app.use(cors());

// Routes
app.use(rpcRouter);
app.use("/hive", witnessRouter);
app.use("/hive", delegationRouter);

module.exports = app;
