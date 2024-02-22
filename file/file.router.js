const express = require('express');
const router = express.Router();


const {
  listAction,
  listUserAction,
  removeAction,
  importAction,
  loginAction,
  statistikAction,
  getUserByID,
  getTaetigkeitenList
} = require('./file.controller.js');

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin");
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
router.get('/', listAction);

module.exports = router;