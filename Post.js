const express = require('express')
const PostRoutes = require('./PostRoutes')
const morgan = require('morgan')
const app = express()
const PORT = 4000 
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(morgan('dev'))
app.get('/', (req, res) => {
	res.send('<h1>Home Page</h1>')
})
app.use('/posts', PostRoutes)
app.get('*', (req, res) => {
	res.send('<h1>404: Not Found</h1>')	
})

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
