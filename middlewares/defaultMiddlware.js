const express = require("express");
const cors = require("cors");
module.exports = function defaultMiddlware() {
  return [express.urlencoded({ extended: true }), , express.json(), cors()];
};
