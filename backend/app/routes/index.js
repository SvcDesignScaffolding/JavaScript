const express = require('express');
const ListController = require('./controllers/ListController');
const List = require('../models/List');

const router = express.Router();

router.get('/api/list', async (req, res) => {
  const listController = new ListController();
  const list = await listController.get();

  const response = {
    list: list.map((item) => new List(item.id, item.name, item.age)),
  };

  res.json(response);
});

module.exports = router;
