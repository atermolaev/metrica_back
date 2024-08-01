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

router.get('/', function (req, res, next) {
  // const response = {};
  // res.send(JSON.stringify(req));
  res.send({ 'test': 'test1' });
});

router.post('/auth', function (req, res, next) {
  const cntUser = new UsersControler(req.body.login, req.body.pass)
  const authStatus = cntUser.checkAuth();
  const newToken = cntUser.createToken();


  res.send({
    'status': 'success', 'body': {
      'auth': authStatus,
      'token': newToken,
    },
  });
});

module.exports = router;
