const express = require('express')
const router = express.Router()

const { newDoc } = require('../controller/document')

router.route('/').get(newDoc)


module.exports = router