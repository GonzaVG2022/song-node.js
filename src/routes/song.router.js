const { getAll, create, remuve, update, getOne } = require('../controllers/song.controller');
const express = require('express');

const songRouter = express.Router();

songRouter.route("/")
		.get(getAll)
		.post(create)
songRouter.route("/:id")
		.delete(remuve)
		.put(update)
		.get(getOne)
module.exports = songRouter; 