import { todosService } from '../services/TodosService'
import BaseController from '../utils/BaseController'

export class ProfilesController extends BaseController {
  constructor() {
    super('api/profiles')
    this.router
      .get('/:profileId/todos', this.getProfileTodos)
  }

  async getProfileTodos(req, res, next) {
    try {
      const todos = await todosService.getProfileTodos(req.params.profileId)
      res.send(todos)
    } catch (error) {
      next(error)
    }
  }
}
