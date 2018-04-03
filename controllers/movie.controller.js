'use strict'

const Model =  require('../models/movie.model'),
	  MovieController = () => {}

MovieController.index = (req, res, next) => 
{

	Model.read( (err, rows) => {
		if(err){
			let locals = {
					title : 'Query Error...',
					description : "Error Sintaxis SQL",
					error : err
				}
			res.render('error', locals)
		}else{
			let locals = {
					title: 'Movies List',
					data: rows
				}
			res.render('index', locals)
		}
	})

}

MovieController.create = (req, res, next) => 
{

	res.render('create',{title: "New Movie"})

}

// MovieController.store = (req, res , next) => 
// {
// 	let movie = {
// 		movie_id: req.body.movie_id,
// 		title: req.body.title,
// 		release_year: req.body.release_year,
// 		rating: req.body.rating,
// 		image: req.body.poster
// 	}
// 	console.log(movie)

// 	Model.store(movie, (err, rows) => {
// 		if(err){
// 			let locals = {
// 					title : 'Query Error...',
// 					description : "Error Sintaxis SQL",
// 					error : err
// 				}
// 			res.render('error', locals)
// 		}else{

// 			res.redirect('/')
// 		}
// 	})

// }

MovieController.save = (req, res , next) => 
{
	let movie = {
		movie_id: req.body.movie_id,
		title: req.body.title,
		release_year: req.body.release_year,
		rating: req.body.rating,
		image: req.body.poster
	}
	console.log(movie)

	Model.save(movie, (err, rows) => {
		if(err){
			let locals = {
					title : 'Query Error...',
					description : "Error Sintaxis SQL",
					error : err
				}
			res.render('error', locals)
		}else{

			res.redirect('/')
		}
	})

}

MovieController.edit = (req, res, next) => 
{
	let movie_id = req.params.movie_id
	
	console.log(movie_id)
		
	Model.getMovieById([movie_id], (err, rows) => {
		
		if(err){
			let locals = {
					title : 'Query Error...',
					description : "Error Sintaxis SQL",
					error : err
				}
			res.render('error', locals)
		}
		else{	
	   		let locals = {
	   			title: "Edit Movie",
	   			data: rows
	   		}

	   		res.render('edit', locals)

		}
		
	})

}

// MovieController.update = (req, res, next) => 
// {
// 	let movie = {
// 		movie_id: req.body.movie_id,
// 		title: req.body.title,
// 		release_year: req.body.release_year,
// 		rating: req.body.rating,
// 		image: req.body.poster
// 	}
// 	console.log(movie)

// 	Model.update(movie, movie.movie_id, (err, rows) =>{

// 		if(err){
// 			let locals = {
// 					title : 'Query Error...',
// 					description : "Error Sintaxis SQL",
// 					error : err
// 				}
// 			res.render('error', locals)
// 		}
// 		else{	

// 	   		res.redirect('/')

// 		}
// 	})
// }


MovieController.delete = (req, res, next) => 
{

	let movie_id = req.params.movie_id
	console.log(movie_id)

	
	Model.delete(movie_id, (err, rows) => {
		 

		if(err){
			let locals = {
					title : 'Query Error...',
					description : "Error Sintaxis SQL",
					error : err
				}
			res.render('error', locals)
		}
		else{	

	   		res.redirect('/')

		}
	})


}



MovieController.error404 = (req, res, next) => 
{
	let error = new Error(),
		locals = {
			title : 'Error 404',
			description : 'Recurso No Encontrado',
			error : error
		}
	error.status = 404

	res.render('error', locals)
	
	next()	

}

module.exports = MovieController