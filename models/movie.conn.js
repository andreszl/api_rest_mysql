'use strict'

const mysql = require('mysql'),
	  config = require('./db.conf.json'),
	  dbOtions = {
	  	host : config.mysql.host,
	  	port : config.mysql.port,
	  	user : config.mysql.user,
	  	password : config.mysql.pass,
	  	database : config.mysql.db

	  },

	 conn = mysql.createConnection(dbOtions)

conn.connect( (err)=>{
	return (err) ? console.log(`Error Connection... : ${err.stack} `) : console.log(`Conencted Database MYSQL... | N° : ${conn.threadId}`)
})	



module.exports = conn

