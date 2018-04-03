'use strict'

const conn =  require('./movie.conn'),
	  MovieModel = () => {}

MovieModel.read = (callback) => 
{

	conn.query('select *from movie', callback)

}

// MovieModel.store = (data, callback) => 
// {	
	
// 	conn.query('insert into movie set ?',data , callback)
// }

MovieModel.getMovieById = (id, callback) => 
{
	conn.query('select *from movie where movie_id = ?', id, callback)

}
MovieModel.save = (data, callback) => 
{

	conn.query('select *from movie where movie_id = ?',data.movie_id, (err, rows) => {

		console.log(rows.length)
		if(err){
			return err
		}else{
			return ( rows.length == 1 ) ? conn.query('update movie set ? where movie_id = ? ',
					[data , data.movie_id], callback) 
					: conn.query('insert into movie set ?',data , callback) 
		}
		
	})

} 

// MovieModel.update = (data, id, callback) => 
// {

// 	conn.query('update movie set ? where movie_id = ? ',[data , id], callback)

// }

MovieModel.delete = (id, callback) => 
{

	conn.query('delete from movie where movie_id = ? ', id, callback)

}
MovieModel.close = () => conn.end()


module.exports = MovieModel