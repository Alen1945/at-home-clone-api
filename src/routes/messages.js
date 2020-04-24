const MessageRouters = require('express').Router()
const { CreateMessage } = require('../controllers/messages')

MessageRouters.post('/', CreateMessage)

module.exports = MessageRouters
