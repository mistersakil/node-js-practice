class PostController{
	constructor(){
		this.posts = [
			// {
			// 	title: 'Default post title',
			// 	body: 'Default post body',
			// 	id: 1
			// },
			// {
			// 	title: 'Default post title 2',
			// 	body: 'Default post body',
			// 	id: 2
			// }
		]
	}

	get list(){
		return this.posts
	}

	create({title, body}){
		const post = {title, body}
		const length = this.posts.length
		post.id = length ? this.posts[length - 1].id + 1 : 1
		this.posts.push(post)
		return post
	}

	read(id){
		let post = this.posts.find(post => post.id === id)
		return post
	}

	update({id, title, body}){
		let posts = [...this.posts]
		posts = posts.map(post => {
			if(post.id === id){
				post.title = title ? title : post.title
				post.body = body ? body : post.body
			}
			return post
		})
		this.posts = [...posts]
		return posts.find(post => post.id === id)
	}

	delete(id){
		let post = this.posts.find(post => post.id === id)
		let posts = [...this.posts]
		posts = posts.filter(post => post.id !== id)
		this.posts = [...posts]
		return post
	}
}

module.exports = new PostController()