// Initialize Express Router
let router = require("express").Router();

// Set default API response
router.get("/", function (req, res){
    res.json({
        status : "API it's Working",
        message : "Welcome to API RESTHub"
    })
});

// Insert contact Controller
let contactController  = require("./contactController")

// Contact apiRoutes
router.route("/contacts")
    .get(contactController.index)
    .post(contactController.new)

router.route("/contacts/:contact_id")
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete)


module.exports = router;