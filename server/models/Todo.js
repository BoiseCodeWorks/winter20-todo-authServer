import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Todo = new Schema(
  {
    description: { type: String, required: true },
    creatorId: { type: String, required: true },
    completed: { type: Boolean, default: false, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Todo.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

export default Todo
