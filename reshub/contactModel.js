// Contact Model
let mongoose = require("mongoose")

// Setup Database
let contactSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    gender : String,
    phone : String,
    create_date : {
        type : Date,
        default : Date.now
    }

})

let contact = module.exports = mongoose.model("contact", contactSchema);

module.exports.get = function (callback, limit){
    contact.find(callback).limit(limit);
}