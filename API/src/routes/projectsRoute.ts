'use strict'

import {
  addProject,
  deleteProject,
  deleteProjects,
  getProject,
  getProjects,
  updateProject,
} from '../controllers/projectsController'

const route = (app: any): void => {
  app.route('/project').post(addProject)
  app
    .route('/project/:id')
    .delete(deleteProject)
    .get(getProject)
    .put(updateProject)
  app
    .route('/projects')
    .delete(deleteProjects)
    .get(getProjects)
}

export default route
