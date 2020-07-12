// Quiz Modele
var mongo = require("mongoose");
const AttenteReservationBookSchema = new mongo.Schema({
    idbook:{ type: String },
    iduser : { type : String },
     
});

mongo.model('AttenteReserveBook',AttenteReservationBookSchema,'listeattentebooks');