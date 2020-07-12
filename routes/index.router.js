const express = require("express");
const router = express.Router();

const jwtHelper = require('../config/jwtHelper');
const ctrUser = require("../controllers/user.controller");
const ctrQuiz = require("../controllers/quiz.controller");
const ctrResponse = require("../controllers/response.controller");
const ctrReserveBook = require("../controllers/reserveBook.controller");
const ctrListeAttenteBook = require("../controllers/attentebook.controller");

const ctrReserveEvent = require("../controllers/reserveEvent.controller");
const ctrListeAttenteEvent = require("../controllers/attenteevent.controller");

router.post('/register',ctrUser.register);
router.post('/authenticate', ctrUser.authenticate);
router.get('/getallusers', ctrUser.getallusers);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrUser.userProfile);
/** Quiz  */
router.post('/addquiz',ctrQuiz.addQuiz);
router.post('/updatequiz',ctrQuiz.updateQuiz);
router.post('/deletequiz',ctrQuiz.deleteQuiz);
router.get('/allcoursquiz',ctrQuiz.allcoursquiz);
/** responses */
router.post('/addresponse',ctrResponse.addresponse);
router.post('/updateresponse',ctrResponse.updateresponse);
router.post('/deleteresponse',ctrResponse.deleteresponse);
router.get('/allquizresponses',ctrResponse.allquizresponse);


/** reservations books */
router.post('/addreservebook',ctrReserveBook.addRB);
//router.post('/updateresponse',ctrReserveBook.updateresponse);
router.post('/deletereservebook',ctrReserveBook.deleteReserveBook);
router.get('/alluserreservebook',ctrReserveBook.allreservationsbooksuser);
router.get('/allreservebook',ctrReserveBook.allreservationsbooks);

/** Liste attente books */
router.post('/addattentebook',ctrListeAttenteBook.addARB);
//router.post('/updateresponse',ctrListeAttenteBookeresponse);
router.post('/deleteattentebook',ctrListeAttenteBook.deleteAttenteReserveBook);
router.get('/allattenteuserbook',ctrListeAttenteBook.allListeAttenteBooksUser);
router.get('/allattentebook',ctrListeAttenteBook.allListeAttenteBooks);



/** reservations events */
router.post('/addreserveevent',ctrReserveEvent.addEvent);
//router.post('/updateresponse',ctrReserveEvent.updateresponse);
router.post('/deletereserveevent',ctrReserveEvent.deleteReserveEvent);
router.get('/alluserreserveevent',ctrReserveEvent.allreservationseventsuser);
router.get('/allreserveevent',ctrReserveEvent.allreservationsevents);

/** Liste attente events */
router.post('/addattenteevent',ctrListeAttenteEvent.addARE);
//router.post('/updateresponse',ctrListeAttenteEventeresponse);
router.post('/deleteattenteevent',ctrListeAttenteEvent.deleteAttenteReserveEvent);
router.get('/allattenteuserevent',ctrListeAttenteEvent.allListeAttenteEventsUser);
router.get('/allattenteevent',ctrListeAttenteEvent.allListeAttenteEvents);



module.exports = router;
