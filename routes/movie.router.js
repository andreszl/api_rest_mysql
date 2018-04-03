'use strict'

const MovieController = require('../controllers/movie.controller'),
	  express = require('express'),
	  router = express.Router()


router
	.get('/', MovieController.index)
	.get('/create', MovieController.create)
	
	// .post('/store', MovieController.store)
	
	.post('/store', MovieController.save)
	.get('/edit/:movie_id', MovieController.edit)
	
	// .post('/update', MovieController.update)
	// .put('/update', MovieController.update)
	
	.put('/update', MovieController.save)
	
	// .post('/delete/:movie_id', MovieController.delete)
	
	.delete('/delete/:movie_id', MovieController.delete)
	.use(MovieController.error404)
	
module.exports = router