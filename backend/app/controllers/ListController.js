const express = require('express');
const List = require('../models/List');

class ListController {
  get() {
    return await List.find();
  }
}

module.exports = ListController;
