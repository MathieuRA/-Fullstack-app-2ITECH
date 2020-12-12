'use strict'

import {
  addUser,
  deleteUser,
  deleteUsers,
  getUser,
  getUsers,
  updateUser,
} from '../controllers/usersController'

const route = (app: any): void => {
  app.route('/user').post(addUser)
  app
    .route('/user/:id')
    .delete(deleteUser)
    .get(getUser)
    .put(updateUser)
  app.route('/users').delete(deleteUsers).get(getUsers)
}

export default route
