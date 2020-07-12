// Quiz Modele
var mongo = require("mongoose");
const AttenteReservationEventSchema = new mongo.Schema({
    idevent:{ type: String },
    iduser : { type : String },
     
});

mongo.model('AttenteReserveEvent',AttenteReservationEventSchema,'listeattenteevents');