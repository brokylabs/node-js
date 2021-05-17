// contactController

// Import Contact Model
Contact  = require("./contactModel.js")

// Handle index actions
exports.index = function(req, res){
    Contact.get(function(err, contact){
        if(err){
            res.json({
                status : "Error",
                message : err
            });
        }
        res.json({
            status : "Success",
            message : "Contact retrived successfully",
            data : contact
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
            data : contact
        })
    })
}

// handle View info
exports.view = function(req, res){
    Contact.findById(req.params.contact_id, function(err, contact){
        if(err)
        res.send(err);
        res.json({
            message : "Contact details Loading...",
            data : contact,
        });
    });
};

//Handle Update Contact Info
exports.update = function(req, res){
    Contact.findById(req.params.contact_id, function(err, contact){
        if(err)
        res.send(err)
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.gender = req.body.gender;
    contact.email = req.body.email;
    contact.phone = req.body.phone;

// save contact and check error
    contact.save(function(err){
        if(err)
        res.json(err);
        res.json({
            message : "Contact info update!",
            data : contact
        });
    });
    });
};

// Handle Delete contact
exports.delete = function(req, res){
    Contact.remove({
        _id : req.body.contact_id
    }, function (err, contact){
        if(err)
        res.send(err)
        res.json({
            status : "Success!",
            message : "Contact Deleted!"
        })
    })
}
