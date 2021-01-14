import mongoose from 'mongoose'
import ValueSchema from '../models/Value'
import AccountSchema from '../models/Account'
import TodoSchema from '../models/Todo'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Todos = mongoose.model('Todo', TodoSchema);
  Account = mongoose.model('Account', AccountSchema);
}

export const dbContext = new DbContext()
