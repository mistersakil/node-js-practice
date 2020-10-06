const userRoutes = require('express').Router()
userRoutes.get('/login', (req, res) => {
	res.send('<h1>Login Page</h1>')
})
userRoutes.get('/logout', (req, res) => {
	res.send('<h1>logout Page</h1>')
})
userRoutes.get('/register', (req, res) => {
	res.send('<h1>register Page</h1>')
})
module.exports.userRoutes = userRoutes