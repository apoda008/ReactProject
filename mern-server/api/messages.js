const Message = require("../models/message");
const router = require("express").Router();

//Get List of all messages sorted by posted field in descending order 
router.get("/", function(req, res) {
    Message.find().sort("-posted").exec(function(err, messages){
        if (err) {
            res.status(400).send(err);
        } else {
            res.json(messages);
        }
    });
});

//Get a message with an ID
router.get("/:id", function(req, res) {
    Message.findById(req.params.id, function(err,message) {
        if (err) {
            res.status(400).send(err);
        } else {
            res.json(messages);
        }
    });
});

//Add a new message to the database
router.post("/", function(req, res) {
    const message = new Message(req.body);
    message.save(function(err, message){
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(201).json(message);
        }
    });
});

//Update an existing message
router.put("/:id", function(req, res) {
    const messagePart = req.body;
    Message.updateOne({ _id: req.params.id }, messagePart, 
        {runValidators: true }, function(err, result) {
        if(err) {
            res.status(400).send(err);
        } else if (result.matchedCount === 0){
            res.sendStatus(404);
        } else {
            res.sendStatus(204);
        }
    });
});

//Delete a message with an ID 
router.delete("/:id", function(req, res) {
    Message.deleteOne({ _id: req.params.id }, function(err, result) {
        if (err) {
            res.status(400).send(err);
        } else if (result.matchedCount === 0) {
            res.sendStatus(404);
        } else {
            res.sendStatus(204);
        }
    });
});

module.exports = router;