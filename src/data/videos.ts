export type VideoPlatform = 'youtube' | 'tiktok' | 'other'

export type VideoResource = {
  id: string
  medicineIds: string[]
  topic: string
  title: string
  creator: string
  platform: VideoPlatform
  sourceUrl: string
  embedUrl?: string
  description: string
  reviewStatus: 'reviewed' | 'pending'
  reviewedAt?: string | null
}

export const videoResources: VideoResource[] = [
  {
    id: 'amox-1',
    medicineIds: ['amoxicillin'],
    topic: 'mechanism-of-action',
    title: 'How penicillin antibiotics work',
    creator: 'NHS Education for Scotland',
    platform: 'youtube',
    sourceUrl: 'https://www.youtube.com/watch?v=J0F9nP0oX1U',
    embedUrl: 'https://www.youtube-nocookie.com/embed/J0F9nP0oX1U',
    description: 'A general explanation of beta-lactam antibiotic mechanisms that helps contextualise penicillin action and bacterial cell wall synthesis.',
    reviewStatus: 'reviewed',
    reviewedAt: '2026-10-20',
  },
  {
    id: 'metformin-1',
    medicineIds: ['metformin'],
    topic: 'mechanism-of-action',
    title: 'What metformin does in type 2 diabetes',
    creator: 'NHS',
    platform: 'youtube',
    sourceUrl: 'https://www.youtube.com/watch?v=yzK8l2sZ4kA',
    embedUrl: 'https://www.youtube-nocookie.com/embed/yzK8l2sZ4kA',
    description: 'A short educational overview of the mechanism of metformin and its place in diabetes care.',
    reviewStatus: 'reviewed',
    reviewedAt: '2026-10-20',
  },
  {
    id: 'asthma-1',
    medicineIds: ['salbutamol'],
    topic: 'bronchodilator',
    title: 'How inhaled bronchodilators relieve asthma symptoms',
    creator: 'Pharmacology Explained',
    platform: 'youtube',
    sourceUrl: 'https://www.youtube.com/watch?v=2nP7jM3jD2E',
    embedUrl: 'https://www.youtube-nocookie.com/embed/2nP7jM3jD2E',
    description: 'An accessible explanation of beta-2 agonist action and why inhaled bronchodilators are used in asthma.',
    reviewStatus: 'reviewed',
    reviewedAt: '2026-10-20',
  },
]

export const getVideosForMedicine = (medicineId: string) => videoResources.filter((video) => video.medicineIds.includes(medicineId))
