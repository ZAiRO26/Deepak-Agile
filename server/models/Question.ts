import { Schema, model, Types } from 'mongoose'

const QuestionSchema = new Schema({
  questionText: { type: String, required: true },
  options: { type: [String], required: true },
  correctAnswer: { type: String, required: true },
  category: { type: String, required: true },
  explanation: { type: String },
})

export type QuestionDoc = {
  _id: Types.ObjectId
  questionText: string
  options: string[]
  correctAnswer: string
  category: string
  explanation?: string
}

export default model<QuestionDoc>('Question', QuestionSchema)