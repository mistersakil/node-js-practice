const Route = require('express').Router()
const {PostList, PostCreate, PostRead, PostUpdate, PostDelete} = require('./PostRoutesHandler')
Route.get('/', PostList)
Route.post('/', PostCreate)
Route.get('/:id', PostRead)
Route.put('/:id', PostUpdate)
Route.delete('/:id', PostDelete)
module.exports = Route