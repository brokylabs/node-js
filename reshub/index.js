// Import Express
let Express = require("express")

// Import Body Parser
let bodyParser  = require("body-parser");

// Import Mongoose
let mongoose = require("mongoose");

// Initialize App
let app = Express()

// Import Router API
let apiRouter = require("./api-routes")

// Setup Server
var port = process.env.PORT || 8080

// Send Message for default URL
app.get('/', (req, res) => res.send("Hello Word expressJS and Nodemon"));

// App apiRoutes 
app.use("/api", apiRouter);

// Config bodyParser
app.use(bodyParser.urlencoded({
    extended : true
}));
app.use(bodyParser.json());

// Connect to Databses Mongoose
mongoose.connect("mongodb://localhost/reshub");

let db = mongoose.connection;

// Launch App | Listen
app.listen(port, function(){
    console.log("Running on port ... " + port);
})