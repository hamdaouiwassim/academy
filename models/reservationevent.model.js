var mongo = require("mongoose");
const ReservationEventSchema = new mongo.Schema({
    idevent:{ type: String },
    iduser : { type : String },
     
});

mongo.model('ReserveEvent',ReservationEventSchema,'reservationsevents');