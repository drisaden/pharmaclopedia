export type QuizQuestion = {
  id: string
  medicineId: string
  question: string
  options: string[]
  correctAnswer: string
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
}

export type QuizResult = {
  score: number
  total: number
  incorrect: string[]
}

export const calculateQuizResult = (questions: QuizQuestion[], answers: Record<string, string>): QuizResult => {
  const incorrect = questions.filter((question) => answers[question.id] !== question.correctAnswer).map((question) => question.id)

  return {
    score: questions.length - incorrect.length,
    total: questions.length,
    incorrect,
  }
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'amox-1',
    medicineId: 'amoxicillin',
    question: 'What is the primary mechanism of action of amoxicillin?',
    options: [
      'Inhibition of bacterial protein synthesis by binding the 30S ribosomal subunit',
      'Inhibition of bacterial cell wall synthesis by binding penicillin-binding proteins',
      'Interference with folate synthesis in bacteria',
      'Direct bacterial DNA strand breakage',
    ],
    correctAnswer: 'Inhibition of bacterial cell wall synthesis by binding penicillin-binding proteins',
    explanation: 'Amoxicillin is a beta-lactam antibiotic that inhibits bacterial cell wall synthesis by binding penicillin-binding proteins, preventing peptidoglycan cross-linking.',
    difficulty: 'easy',
  },
  {
    id: 'meta-1',
    medicineId: 'metformin',
    question: 'Which statement best describes the usual risk profile of metformin when used alone?',
    options: [
      'It commonly causes hypoglycaemia when used alone',
      'It usually does not cause hypoglycaemia when used alone',
      'It is a rapid insulin releaser',
      'It is mainly used for acute bacterial infections',
    ],
    correctAnswer: 'It usually does not cause hypoglycaemia when used alone',
    explanation: 'Metformin primarily lowers glucose production and improves insulin sensitivity; it does not usually cause hypoglycaemia when used alone unless combined with other glucose-lowering drugs or in special risk situations.',
    difficulty: 'easy',
  },
  {
    id: 'salb-1',
    medicineId: 'salbutamol',
    question: 'Which receptor is mainly targeted by salbutamol in the bronchi?',
    options: ['Alpha-1 adrenergic receptor', 'Beta-2 adrenergic receptor', 'Muscarinic M3 receptor', 'H1 histamine receptor'],
    correctAnswer: 'Beta-2 adrenergic receptor',
    explanation: 'Salbutamol is a short-acting beta-2 agonist that causes bronchodilation by stimulating beta-2 receptors in bronchial smooth muscle.',
    difficulty: 'easy',
  },
  {
    id: 'para-1',
    medicineId: 'paracetamol',
    question: 'Why is the maximum daily dose of paracetamol clinically important?',
    options: [
      'Because overdose can cause significant liver injury',
      'Because it can permanently damage the kidneys at normal doses',
      'Because it raises blood pressure excessively',
      'Because it causes severe hypoglycaemia in all patients',
    ],
    correctAnswer: 'Because overdose can cause significant liver injury',
    explanation: 'Paracetamol is generally safe at therapeutic doses, but overdose is a major risk because it can produce hepatotoxicity.',
    difficulty: 'medium',
  },
]

export const getQuizForMedicine = (medicineId: string) => quizQuestions.filter((question) => question.medicineId === medicineId)
