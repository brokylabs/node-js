// contactController

// Import Contact Model
Contact  = require("./contactModel.js")

// Handle index actions
exports.index = function(req, res){
    Contact.get("/", function(req, res){
        if(err){
            res.json({
                status : "Error",
                message : err
            });
        }
        res.json({
            status : "Success",
            message : "Contact retrived successfully",
            data : Contact
        });
    });
}

// Handle create contact
exports.new = function(req, res){
    let contact = new Contact();
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.gender = req.body.gender;
    contact.email = req.body.email;
    contact.phone = req.body.phone;

// Save Contact and save
    contact.save(function(err){
        // if(err)
        // res.json(err);

        res.json({
            message : "New Contact Created!",
            data : data
        })
    })
}

// handle View info
exports.view = function(req, res){
    Contact.findById(req.params.contact.contact_id, function(err, contact)
    {
        if(err)
        res.send(err)
        res.json(({
            message : "Contact details Loading...",
            data : contact
        }))
    }
}
