import { medicines, type Medicine } from './medicines'
import type { LessonMode } from '../types/app'

export const lessonModes: Record<LessonMode, { title: string; description: string }> = {
  'explain-simply': {
    title: 'Explain Simply',
    description: 'Plain-language learning designed for a clear first understanding.',
  },
  'pharmacy-student': {
    title: 'Pharmacy Student',
    description: 'Pharmacology language, mechanisms, and classification.',
  },
  'exam-preparation': {
    title: 'Exam Preparation',
    description: 'High-yield concepts and recall prompts for revision.',
  },
  'clinical-understanding': {
    title: 'Clinical Understanding',
    description: 'Therapeutic context and safety awareness for informed study.',
  },
  'quick-revision': {
    title: 'Quick Revision',
    description: 'Short summary points to refresh key concepts rapidly.',
  },
}

export const buildLessonContent = (medicine: Medicine, mode: LessonMode) => {
  const base = {
    introduction: `${medicine.genericName} is a ${medicine.drugClass.toLowerCase()} medicine used in ${medicine.therapeuticCategories.join(', ').toLowerCase()} care.`,
    keyPoints: medicine.learningPoints.slice(0, 3),
    explanation: medicine.mechanismOfAction,
    followUpQuestions: [
      `Why is ${medicine.genericName} important in ${medicine.therapeuticCategories[0]?.toLowerCase() || 'clinical practice'}?`,
      `What are the main safety considerations for ${medicine.genericName}?`,
      `How does ${medicine.genericName} differ from other medicines in the same class?`,
    ],
    revisionSummary: [
      `Class: ${medicine.drugClass}`,
      `Main action: ${medicine.mechanismOfAction}`,
      `Main caution: ${medicine.contraindicationsAndPrecautions[0] || 'Monitor safety and professional guidance.'}`,
    ],
  }

  switch (mode) {
    case 'explain-simply':
      return {
        ...base,
        introduction: `Think of ${medicine.genericName} as a medicine that targets the problem at its source. It works in a very specific way: ${medicine.mechanismOfAction.toLowerCase()}`,
        keyPoints: [
          `${medicine.genericName} is used for ${medicine.indications.slice(0, 2).join(' and ') || 'relevant infections or symptoms'}.`,
          `It is important to understand both its benefit and its safety limits, especially ${medicine.contraindicationsAndPrecautions[0]?.toLowerCase() || 'dose and monitoring considerations'}.`,
          `${medicine.adverseEffects[0] || 'Common side effects'} are worth noting when studying the medicine.`,
        ],
      }
    case 'pharmacy-student':
      return {
        ...base,
        introduction: `${medicine.genericName} belongs to the ${medicine.drugClass} class and is used mainly for ${medicine.indications.slice(0, 2).join(', ')}. Its pharmacology is best understood through the relationship between structure, target, and clinical effect.`,
        keyPoints: medicine.learningPoints.length ? medicine.learningPoints : base.keyPoints,
      }
    case 'exam-preparation':
      return {
        ...base,
        introduction: `${medicine.genericName} is a high-yield medicine in ${medicine.therapeuticCategories.join(', ')}. Understand its class, key indication, mechanism, and key side effects.`,
        keyPoints: [
          `Class: ${medicine.drugClass}`,
          `Mechanism: ${medicine.mechanismOfAction}`,
          `Common exam focus: ${medicine.examinationPearls[0] || medicine.learningPoints[0] || 'Adverse effects and safety'}`,
        ],
      }
    case 'clinical-understanding':
      return {
        ...base,
        introduction: `${medicine.genericName} is not a generic answer to every problem in this therapeutic area. It is used in specific clinical contexts and should be considered alongside ${medicine.contraindicationsAndPrecautions[0]?.toLowerCase() || 'important safety considerations'}.`,
        keyPoints: [
          `Clinical context: ${medicine.indications[0] || 'relevant therapeutic indication'}`,
          `Safety: ${medicine.contraindicationsAndPrecautions[0] || 'Follow professional guidance.'}`,
          `Monitoring: Review adverse effects and patient counselling points.`,
        ],
      }
    case 'quick-revision':
      return {
        ...base,
        introduction: `Quick revision: ${medicine.genericName} is a ${medicine.drugClass.toLowerCase()} drug used for ${medicine.indications.slice(0, 2).join(' and ')}.`,
        keyPoints: [
          `Mechanism: ${medicine.mechanismOfAction}`,
          `Safety: ${medicine.contraindicationsAndPrecautions[0] || 'Understand the main precaution.'}`,
          `Watch for: ${medicine.adverseEffects.slice(0, 2).join(', ') || 'common adverse effects'}`,
        ],
      }
    default:
      return base
  }
}

export const findMedicineById = (medicineId: string) => medicines.find((medicine) => medicine.id === medicineId)

export const getSuggestedQuestions = (medicineId: string) => {
  const medicine = findMedicineById(medicineId)
  if (!medicine) return []

  return [
    `How does ${medicine.genericName} work?`,
    `What are the main safety concerns with ${medicine.genericName}?`,
    `When is ${medicine.genericName} typically used?`,
  ]
}
