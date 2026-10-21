export type LessonMode = 'explain-simply' | 'pharmacy-student' | 'exam-preparation' | 'clinical-understanding' | 'quick-revision'

export type QuizResult = {
  score: number
  total: number
  incorrect: string[]
}

export type TutorPrompt = {
  medicineId: string
  mode: LessonMode
  question?: string
}
