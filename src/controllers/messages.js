const uploads = require('../middleware/uploadFiles')
const { alarmMessages: MessageModel, messageContents: ContentModel } = require('../models')

exports.GetMessages = async (req, res, next) => {
  try {
    if (req.params.id) {
      const Message = await MessageModel.findOne({
        where: { id: req.params.id },
        attributes: ['id', 'userId', 'type', 'createdAt'],
        include: [
          { model: ContentModel, attributes: ['pathContent'] }
        ]
      })
      if (Message) {
        res.status(200).send({
          success: true,
          data: {
            id: Message.id,
            userId: Message.userId,
            type: Message.type,
            content: Message.messageContents
          }
        })
      } else {
        res.status(200).send({
          success: false,
          data: null,
          msg: 'id Not Exists'
        })
      }
    } else {

    }
  } catch (err) {
    console.log(err)
    res.status(202).send({
      success: false,
      msg: 'something wrong'
    })
  }
}
exports.CreateMessage = async (req, res, next) => {
  try {
    await uploads(req, res, 'dataUploads')
    if (req.files.length > 0) {
      const resultMessage = await MessageModel.create({ userId: 1, type: 'image' })
      if (resultMessage) {
        const dataContent = req.files.map((v) => ({ messageId: resultMessage.id, pathContent: '/uploads/' + v.filename }))
        await ContentModel.bulkCreate(dataContent)
        res.send({
          success: true,
          msg: 'success uploads'
        })
      }
    } else {
      res.status(202).send({
        success: false,
        msg: 'Not file uploaded'
      })
    }
  } catch (err) {
    console.log(err)
    res.status(202).send({
      success: false,
      msg: 'something wrong'
    })
  }
}
