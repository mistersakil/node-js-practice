const express = require('express')
const app = server = Route = express()
const PORT = 4000
const Router = express.Router()

Route.get('/', (req, res) => {
	console.log(Router)
	res.send('<h1>Home Page</h1>')
})
Route.get('/users/:username?', (req, res) => {
	const {username} = req.params
	username ? res.send(`<h1>Hello User : ${username}</h1>`)	: res.send('<h1>Users Page</h1>')
})
Route.get('/users/profile/10000*235375117', (req, res) => {
	const userId = req.params['0']
	console.log(req.params)
	userId ? res.send(`<h1>Hello User Profile ID: ${userId}</h1>`)	: res.send('<h1>Users Page</h1>')
})

Route.get('/about', (req, res) =>{
	res.send('<h1>About Page</h1>')
})



server.listen(PORT, () => console.log(`Server running on port: ${PORT}`))



