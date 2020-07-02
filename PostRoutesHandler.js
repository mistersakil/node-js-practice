const PostController = require('./PostController')
module.exports.PostList = (req, res) => {
	res.json(PostController.list)
}
module.exports.PostCreate = (req, res) => {
	const post = req.body 
	const postNew = PostController.create(post)
	res.json(postNew)
}
module.exports.PostRead = (req, res) => {
	const id = parseInt(req.params.id)
	const post = PostController.read(id)
	post ? res.json(post) : res.send('<h1>404: Not Found</h1>')
}
module.exports.PostUpdate = (req, res) => {
	const id = parseInt(req.params.id)
	const post = PostController.update({id, ...req.body})
	post ? res.json(post) : res.send('<h1>404: Not Found</h1>')
}
module.exports.PostDelete = (req, res) => {
	const id = parseInt(req.params.id)
	const post = PostController.delete(id)
	post ? res.json(post) : res.send('<h1>404: Not Found</h1>')
}