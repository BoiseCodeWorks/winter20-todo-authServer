import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class TodosService {
  async getProfileTodos(profileId) {
    return await dbContext.Todos.find({ creatorId: profileId }).populate('creator')
  }

  async find(query = {}) {
    const todos = await dbContext.Todos.find(query).populate('creator')
    return todos
  }

  async findById(id) {
    const todo = await dbContext.Todos.findById(id)
    if (!todo) {
      throw new BadRequest('Invalid Id')
    }
    return todo
  }

  async create(body) {
    return await dbContext.Todos.create(body)
  }

  async edit(todo) {
    const newTodo = await dbContext.Todos.findOneAndUpdate({ _id: todo.id, creatorId: todo.creatorId }, todo, { new: true }).populate('creator')
    if (!newTodo) {
      throw new BadRequest('You are not the creator, or this is not a valid todo')
    }
    return newTodo
  }

  async delete(id, userId) {
    const todo = await dbContext.Todos.findOneAndRemove({ _id: id, creatorId: userId })
    if (!todo) {
      throw new BadRequest('You are not the creator, or this is not a valid todo')
    }
    return 'successfully deleted'
  }
}

export const todosService = new TodosService()
