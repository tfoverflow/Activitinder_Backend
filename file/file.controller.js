const fileModel = require("./file.model.js");
const fileView = require("./file.view.js");

function listAction(request, response) {
    console.log("123");
    response.send(fileView.testAction());
  }

  module.exports = { listAction };