// Import Express

let Express = require("express")

// Initialize App
let app = Express()

// Import Router API
let apiRouter = require("./api-routes")

// Setup Server
var port = process.env.PORT || 8080

// Send Message for default URL
app.get('/', (req, res) => res.send("Hello Word expressJS"));

// App apiRoutes 
app.use("/api", apiRouter);

// Launch App | Listen
app.listen(port, function(){
    console.log("Running on port ... " + port);
})