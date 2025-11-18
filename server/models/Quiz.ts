import { Schema, model, Types } from 'mongoose'

const QuizSchema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  questions: [{ type: Types.ObjectId, ref: 'Question' }],
})

export type QuizDoc = {
  _id: Types.ObjectId
  title: string
  slug: string
  questions: Types.ObjectId[]
}

export default model<QuizDoc>('Quiz', QuizSchema)