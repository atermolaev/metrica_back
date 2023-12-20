import express from 'express';
import { makeSuccessResponse, getSumTwoNums } from '../utils';
import _ from 'lodash';

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const queryObj = req.query;

  const num1 = queryObj?.num1;
  const num2 = queryObj?.num2;

  const num1Current = _.isString(num1) ? num1 : '0';
  const num2Current = _.isString(num2) ? num2 : '0';

  const response = {
    auth: false,
    num1: num1Current,
    num2: num2Current,
    sum: getSumTwoNums(num1Current, num2Current),
  }
  res.send(JSON.stringify(response));
});

module.exports = router;
