// init 
require('dotenv').config()
const express 	= require('express')
const morgan 	= require('morgan')
const app 		= express()
const PORT 		= process.env.PORT || 4000

// middleware
app.use(morgan('dev'))

// routes
app.get('/', (req, res) => {
	res.json({page:'Home'})
})


// server
app.listen(PORT, () =>  console.log(`server running on port: ${PORT}`))




