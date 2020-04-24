const MessageRouters = require('express').Router()
const { CreateMessage, GetMessages } = require('../controllers/messages')

MessageRouters.post('/', CreateMessage)
MessageRouters.get('/', GetMessages)
MessageRouters.get('/:id', GetMessages)
module.exports = MessageRouters
