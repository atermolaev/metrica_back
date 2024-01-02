import express from 'express';
import { makeSuccessResponse, getSumTwoNums, getSubTwoNums, getMultiTwoNums, getNumExponentTwo, getNumEXponentSmth, getNumSqrt } from '../utils';
import _ from 'lodash';

interface IResponse {
  auth: boolean;
  num1: string;
  num2: string;
  sum: number;
  sub: number;
  mult: number;
  num1_exp: number;
  num2_exp: number;
  exp_for_num?: string;
  num1_in_exp?: number;
  num2_in_exp?: number;
  num1_sqrt?: number;
  num2_sqrt?: number;
}

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const queryObj = req.query;

  const num1 = queryObj?.num1;
  const num2 = queryObj?.num2;
  const exp = queryObj?.exp;
  const sqrt = queryObj?.sqrt;

  const num1Current = _.isString(num1) ? num1 : '0';
  const num2Current = _.isString(num2) ? num2 : '0';
  const expCurrent = _.isString(exp) ? exp : null;
  const sqrtFlag = _.isString(sqrt) && sqrt === 'true' ? true : null

  let response: IResponse = {
    auth: false,
    num1: num1Current,
    num2: num2Current,
    sum: getSumTwoNums(num1Current, num2Current),
    sub: getSubTwoNums(num1Current, num2Current),
    mult: getMultiTwoNums(num1Current, num2Current),
    num1_exp: getNumExponentTwo(num1Current),
    num2_exp: getNumExponentTwo(num2Current),
  }

  if (expCurrent !== null) {
    response = { 
      ...response,
      exp_for_num: expCurrent,
      num1_in_exp: getNumEXponentSmth(num1Current, expCurrent),
      num2_in_exp: getNumEXponentSmth(num2Current, expCurrent),
    }
  }

  if (sqrtFlag !== null) {
    response = {
      ...response,
      num1_sqrt: getNumSqrt(num1Current),
      num2_sqrt: getNumSqrt(num2Current),
    }
  }

  res.send(JSON.stringify(response));
});

module.exports = router;
