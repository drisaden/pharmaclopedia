import { describe, expect, it } from 'vitest'
import { calculateQuizResult, getQuizForMedicine, quizQuestions } from '../lib/quizzes'

describe('quiz content', () => {
  it('returns questions for a known medicine', () => {
    const questions = getQuizForMedicine('amoxicillin')
    expect(questions.length).toBeGreaterThan(0)
    expect(questions[0]?.medicineId).toBe('amoxicillin')
  })

  it('contains verified answer options and explanations', () => {
    const sample = quizQuestions[0]
    expect(sample).toBeDefined()
    expect(sample.options.length).toBeGreaterThan(1)
    expect(sample.correctAnswer.length).toBeGreaterThan(0)
    expect(sample.explanation.length).toBeGreaterThan(0)
  })

  it('calculates score and incorrect question ids across all responses', () => {
    const questions = quizQuestions.slice(0, 2)
    const answers = {
      [questions[0].id]: questions[0].correctAnswer,
      [questions[1].id]: questions[1].options[0],
    }

    const result = calculateQuizResult(questions, answers)

    expect(result.score).toBe(1)
    expect(result.total).toBe(2)
    expect(result.incorrect).toEqual([questions[1].id])
  })
})
