const UserRouters = require('express').Router()
const { CreateUser } = require('../controllers/users')

UserRouters.post('/', CreateUser)

module.exports = UserRouters
