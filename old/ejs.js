const express = require('express')

const app = route = express()
const PORT = 4000
app.set('view engine', 'ejs')

route.use(express.json())
route.use(express.urlencoded())

route.get('/', (req, res) => {
	const posts = [
		{
			title: 'title one',
			body: 'body one',
			published: true
		},
		{
			title: 'title two',
			body: 'body two',
			published: false
		}
	]
	res.render('pages/home', {title: 'Home', posts:posts})
})
route.get('/about', (req, res) => {
	res.render('pages/about', {title: 'About'})
})
route.get('/help', (req, res) => {
	res.render('pages/help', {title: 'Help'})
})
app.listen(PORT, () => console.log(`Server running on port : ${PORT}`))


