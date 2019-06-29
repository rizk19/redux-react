var express = require('express');
var router = express.Router();
var Phonebook = require('../../models/phonebook')

/* GET users listing. */
router.get('/', function (req, res, next) {
  Phonebook.find({}, (err, data1) => {
    if (err) return res.status(500).send(err)
    return res.status(200).json(data1)
  })
});

router.post('/', (req, res, next) => {
  let phoneLog = {}
  if (req.body.id) {
    phoneLog.id = req.body.id
  }
  if (req.body.name) {
    phoneLog.name = req.body.name
  }
  if (req.body.phone) {
    phoneLog.phone = parseFloat(req.body.phone)
  }
  if (req.body.sent) {
    phoneLog.sent = req.body.sent
  }
  Phonebook.find({ name: req.body.name }, (err, res1) => {
    if (res1[0]) {
      res.status(401).json({ status: "FAILED", message: 'id has been used' })
    } else {
      Phonebook.create(phoneLog, (err, data) => {
        if (err) return res.status(500).send(err)
        return res.status(201).json({
          status: "SUCCESS", message: "phonebook has been added", data: { id: data.id, name: data.name, phone: data.phone }
        })
      })
    }
  })
})

router.put('/:id', (req, res, next) => {
  let editPhone = {}
  if (req.body.name) {
    editPhone.name = req.body.name
  }
  if (req.body.phone) {
    editPhone.phone = req.body.phone
  }
  Phonebook.findOneAndUpdate({ id: req.params.id }, { $set: editPhone }, (err, response) => {
    if (err) return res.status(401).json({ status: "FAILED", message: "phonebook data not found" })
    return res.status(201).json({
      status: "SUCCESS", message: "phonebook data has been updated", data: {
        id: response.id,
        name: response.name,
        phone: response.phone
      }
    })
  })
})

router.delete('/:id', (req, res, next) => {

  Phonebook.findOneAndDelete({ id: req.params.id }, (err, deleteted) => {
    if (err) return res.status(401).json({ status: "FAILED", message: "delete failed" })
    return res.status(201).json({
      status: "SUCCESS", message: "phonebook has been deleted",
      data: {
        _id: deleteted._id,
        id: deleteted.id,
        name: deleteted.name,
        phone: deleteted.phone
      }
    })
  })

})

module.exports = router;
