import { describe, expect, it } from 'vitest'
import { searchMedicines } from '../lib/medicines'

describe('medicine search', () => {
  it('finds known medicines by generic name', () => {
    const results = searchMedicines('amoxicillin')
    expect(results[0]?.genericName).toBe('Amoxicillin')
  })

  it('matches synonyms and therapeutic categories', () => {
    const results = searchMedicines('antibiotic')
    expect(results.some((item) => item.id === 'amoxicillin')).toBe(true)
  })

  it('matches a medicine by branded name', () => {
    const results = searchMedicines('panadol')
    expect(results.some((item) => item.id === 'paracetamol')).toBe(true)
  })

  it('returns empty list for unknown medicines', () => {
    const results = searchMedicines('zz-medicine-not-real')
    expect(results).toHaveLength(0)
  })
})
