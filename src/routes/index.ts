import express from 'express';
import { makeSuccessResponse } from '../utils';
import _ from 'lodash';
import { User } from '../models';
import UsersControler from '../controllers/usersController';

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
  const cntUser = new UsersControler(req.body.login, req.body.pass)
  const authStatus = cntUser.checkAuth();


  res.send({'status': 'success', 'auth': authStatus});
});

module.exports = router;
