import express from 'express';
import { makeSuccessResponse } from '../utils';
import _ from 'lodash';
import { User } from '../models';

// User.findAll({
//   where: {
//     login: 'demouser'
//   }
// }).then((result) => {

// });

const router = express.Router();

router.get('/', function(req, res, next) {
  // const response = {};
  // res.send(JSON.stringify(req));
  res.send({'test': 'test'});
});

router.post('/auth', function(req, res, next) {
  // const response = {};
  // res.send(JSON.stringify(req));
  res.send({'test': 'auth'});
});

module.exports = router;
