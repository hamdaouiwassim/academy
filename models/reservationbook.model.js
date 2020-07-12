// Quiz Modele
var mongo = require("mongoose");
const ReservationBookSchema = new mongo.Schema({
    idbook:{ type: String },
    iduser : { type : String },
     
});

mongo.model('ReserveBook',ReservationBookSchema,'reservationsbooks');