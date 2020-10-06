const express = require('express')
const {userRoutes} = require('./UserRoutes')
const postRoutes = require('./PostRoutes')
const app = express()
const PORT = 4000

app.use('/users', userRoutes)
app.use('/posts', postRoutes)
app.get('/', (req, res) => {	
	res.send('<h1>Home Page</h1>')
})

app.get('/about', (req, res) =>{
	res.send('<h1>About Page</h1>')
})



app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))



