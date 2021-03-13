// Initialize Express Router
let router = require("express").Router();

// Set default API response
router.get("/", function (req, res){
    res.json({
        status : "API it's Working",
        message : "Welcome to API RESTHub"
    })
});


module.exports = router;