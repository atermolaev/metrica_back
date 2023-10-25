import express from 'express';
import { makeSuccessResponse } from 'utils';

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const response = {
    auth: false,
  }
  res.send(JSON.stringify(response));
});

module.exports = router;
