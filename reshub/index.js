// Import Express

let Express = require("express")

// Initialize App
let app = Express()

// Setup Server
var port = process.env.PORT || 8080

// Send Message for default URL
app.get('/', (req, res) => res.send("Hello Word expressJS"));

// Launch App | Listen
app.listen(port, function(){
    console.log("Running on port ... " + port);
})