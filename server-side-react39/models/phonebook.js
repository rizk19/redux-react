var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var phonebookSchema = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    sent: { type: String }


});

module.exports = mongoose.model('Phonebook', phonebookSchema);
// ready to go!