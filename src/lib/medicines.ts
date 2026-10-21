export type MedicineId = string

export type Medicine = {
  id: MedicineId
  genericName: string
  synonyms: string[]
  drugClass: string
  therapeuticCategories: string[]
  overview: string
  mechanismOfAction: string
  indications: string[]
  dosageForms: string[]
  dosing?: string[]
  storageAndAdministration?: string[]
  pharmacokinetics: {
    absorption?: string
    distribution?: string
    metabolism?: string
    elimination?: string
  }
  adverseEffects: string[]
  contraindicationsAndPrecautions: string[]
  interactions: string[]
  counsellingPoints: string[]
  learningPoints: string[]
  examinationPearls: string[]
  brands: string[]
  manufacturers: string[]
  references: string[]
  reviewStatus: 'reviewed' | 'requires-review'
  lastReviewedAt: string | null
}

export const medicines: Medicine[] = [
  {
    id: 'amoxicillin',
    genericName: 'Amoxicillin',
    synonyms: ['Amoxil', 'Moxicillin'],
    drugClass: 'Aminopenicillin',
    therapeuticCategories: ['Antibiotic', 'Beta-lactam'],
    overview:
      'Amoxicillin is a broad-spectrum penicillin used to treat common bacterial infections such as respiratory tract infections, sinusitis, and some urinary and skin infections.',
    mechanismOfAction:
      'It inhibits bacterial cell wall synthesis by binding to penicillin-binding proteins, disrupting peptidoglycan formation and leading to bacterial cell lysis, especially in actively dividing organisms.',
    indications: [
      'Upper respiratory tract infections',
      'Acute otitis media',
      'Sinusitis',
      'Urinary tract infections',
      'Skin and soft tissue infections',
    ],
    dosageForms: ['Capsules', 'Oral suspension', 'Tablets'],
    dosing: [
      'Adults: follow the prescribed dose for the specific infection; dosing often varies by age, indication, and renal function.',
      'Paediatric dosing should be adjusted carefully according to age, weight, and formulation.',
      'Renal impairment often requires dose adjustment or extended dosing intervals.',
    ],
    storageAndAdministration: [
      'Store in a cool, dry place away from direct sunlight and moisture.',
      'Shake oral suspension well before each use and use the provided measuring device.',
      'Administer doses as prescribed; complete the full course unless a clinician advises otherwise.',
    ],
    pharmacokinetics: {
      absorption: 'Well absorbed orally with food reducing peak concentrations slightly.',
      distribution: 'Good tissue distribution including respiratory secretions and bone in many infections.',
      metabolism: 'Minimal hepatic metabolism.',
      elimination: 'Mostly excreted unchanged in urine.',
    },
    adverseEffects: ['Diarrhoea', 'Nausea', 'Rash', 'Allergic reactions'],
    contraindicationsAndPrecautions: [
      'Avoid in patients with a history of severe beta-lactam allergy.',
      'Use with caution in severe renal impairment.',
      'May alter gut flora and cause diarrhoea.',
    ],
    interactions: ['Warfarin may increase bleeding risk with broad-spectrum antibiotics.', 'Oral contraceptives are not expected to be meaningfully reduced by amoxicillin.', 'Probenecid can reduce renal excretion and increase levels.'],
    counsellingPoints: [
      'Complete the full prescribed course even if symptoms improve early.',
      'Take the medicine as directed, with or without food depending on the prescription.',
      'Report rash, facial swelling, or breathing difficulty promptly.',
    ],
    learningPoints: [
      'Penicillinase-sensitive beta-lactam antibiotic.',
      'Pseudomonas is not reliably covered by amoxicillin alone.',
      'Common adverse effects are usually mild but allergy is important.',
    ],
    examinationPearls: ['Amoxicillin is more acid-stable and better absorbed than ampicillin.', 'It is commonly used for community-acquired respiratory infections.'],
    brands: ['Amoxil', 'Moxipen', 'Trimox'],
    manufacturers: [],
    references: ['WHO Model List of Essential Medicines: https://www.who.int/teams/health-product-policy-and-standards/essential-medicines', 'Standard pharmacology teaching texts'],
    reviewStatus: 'requires-review',
    lastReviewedAt: null,
  },
  {
    id: 'paracetamol',
    genericName: 'Paracetamol',
    synonyms: ['Acetaminophen', 'Panadol'],
    drugClass: 'Analgesic and antipyretic',
    therapeuticCategories: ['Analgesic', 'Antipyretic'],
    overview:
      'Paracetamol is a widely used analgesic and antipyretic for mild to moderate pain and fever. It is often preferred when non-steroidal anti-inflammatory drugs are unsuitable.',
    mechanismOfAction:
      'The exact mechanism is not fully established, but it is thought to inhibit central prostaglandin synthesis and reduce fever and pain signalling in the central nervous system.',
    indications: ['Fever', 'Mild to moderate pain', 'Headache', 'Myalgia'],
    dosageForms: ['Tablets', 'Syrup', 'Suppositories'],
    dosing: [
      'Adults: usual single doses are generally based on weight and indication, and should never exceed the labelled maximum without clinician review.',
      'Children: dosing is usually weight-based and should follow a clinician-approved schedule or product label.',
      'For chronic use or repeated dosing, be alert to total daily intake and any combination products.',
    ],
    storageAndAdministration: [
      'Store below the recommended room-temperature range unless the label states otherwise.',
      'Keep oral liquids in a tightly closed container and protect from heat and moisture.',
      'Use only the measured dose indicated on the product label or prescription.',
    ],
    pharmacokinetics: {
      absorption: 'Well absorbed from the gastrointestinal tract.',
      metabolism: 'Primarily metabolised in the liver.',
      elimination: 'Excreted as conjugated metabolites in urine.',
    },
    adverseEffects: ['Nausea', 'Liver injury in overdose'],
    contraindicationsAndPrecautions: [
      'Avoid excessive dosing; toxicity risk rises with high cumulative daily intake.',
      'Use caution in hepatic impairment and with alcohol use.',
    ],
    interactions: ['Alcohol may increase hepatotoxic risk with overdose or chronic excess use.', 'Some combination products may also contain acetaminophen.'],
    counsellingPoints: [
      'Do not exceed the maximum daily dose on the label or prescription.',
      'Check combined medicines to avoid accidental double dosing.',
    ],
    learningPoints: ['Safe at recommended doses but hepatotoxic in overdose.', 'Common first-line antipyretic in many settings.'],
    examinationPearls: ['Total daily limit is important for exam recall; avoid overdose risk.', 'Use carefully in hepatic disease.'],
    brands: ['Panadol', 'Calpol', 'Tylenol'],
    manufacturers: [],
    references: ['WHO essential medicines references: https://www.who.int/teams/health-product-policy-and-standards/essential-medicines', 'Clinical pharmacology summaries'],
    reviewStatus: 'requires-review',
    lastReviewedAt: null,
  },
  {
    id: 'metformin',
    genericName: 'Metformin',
    synonyms: ['Glucophage'],
    drugClass: 'Biguanide',
    therapeuticCategories: ['Antidiabetic'],
    overview:
      'Metformin is a first-line oral antihyperglycaemic medicine used to improve glycaemic control in type 2 diabetes mellitus.',
    mechanismOfAction:
      'It decreases hepatic glucose output and improves insulin sensitivity, with reduced intestinal glucose absorption also contributing to its glucose-lowering effect.',
    indications: ['Type 2 diabetes mellitus', 'Prediabetes in selected care pathways', 'Polycystic ovary syndrome in some regimens'],
    dosageForms: ['Tablets', 'Extended-release tablets'],
    dosing: [
      'Usual adult dosing is guided by renal function, blood glucose target, and the prescription regimen.',
      'Extended-release products may be taken once or twice daily depending on the formulation and prescriber guidance.',
      'Dose adjustment is often required in renal impairment or when there is acute illness with dehydration.',
    ],
    storageAndAdministration: [
      'Store in a dry place at room temperature away from moisture and direct heat.',
      'Take with or after meals to reduce gastrointestinal side effects.',
      'Do not take more than prescribed, especially when there is illness or reduced kidney function.',
    ],
    pharmacokinetics: {
      absorption: 'Absorbed from the gastrointestinal tract.',
      elimination: 'Excreted unchanged in urine.',
    },
    adverseEffects: ['Gastrointestinal upset', 'Bloating', 'Diarrhoea', 'Metallic taste'],
    contraindicationsAndPrecautions: [
      'Avoid in severe renal impairment or acute kidney injury.',
      'Withhold temporarily in conditions associated with dehydration or hypoxia.',
      'Use with caution in older adults and when there is a risk of lactic acidosis.',
    ],
    interactions: ['Alcohol can increase the risk of lactic acidosis in susceptible patients.', 'Use caution with medicines that affect renal function or glucose control.'],
    counsellingPoints: [
      'Take with meals to reduce gastrointestinal side effects.',
      'Do not stop suddenly without professional advice.',
      'Report severe weakness, difficulty breathing, or persistent vomiting.',
    ],
    learningPoints: ['Does not usually cause hypoglycaemia when used alone.', 'Important for renal safety and GI tolerability.'],
    examinationPearls: ['Lactic acidosis is rare but important; renal function matters.', 'Metformin is a common first-line oral antidiabetic.'],
    brands: ['Glucophage', 'Fortamet'],
    manufacturers: [],
    references: ['Type 2 diabetes treatment guidance: https://www.who.int/publications/i/item/9789241547271', 'Clinical pharmacology references'],
    reviewStatus: 'requires-review',
    lastReviewedAt: null,
  },
  {
    id: 'amlodipine',
    genericName: 'Amlodipine',
    synonyms: ['Norvasc'],
    drugClass: 'Dihydropyridine calcium channel blocker',
    therapeuticCategories: ['Antihypertensive', 'Cardiovascular'],
    overview:
      'Amlodipine is a long-acting calcium channel blocker commonly used to treat hypertension and angina.',
    mechanismOfAction:
      'It blocks L-type calcium channels in vascular smooth muscle, reducing calcium entry and causing vasodilation with a fall in systemic vascular resistance.',
    indications: ['Hypertension', 'Angina', 'Coronary artery disease management support'],
    dosageForms: ['Tablets'],
    pharmacokinetics: {
      absorption: 'Well absorbed orally.',
      metabolism: 'Extensively metabolised in the liver.',
      elimination: 'Eliminated via hepatic metabolism and renal excretion of metabolites.',
    },
    adverseEffects: ['Peripheral oedema', 'Flushing', 'Headache', 'Dizziness'],
    contraindicationsAndPrecautions: [
      'Use with caution in severe hypotension or heart failure with low output.',
      'May worsen oedema or cause dizziness.',
    ],
    interactions: ['Caution with other vasodilators and agents that can worsen hypotension.', 'Grapefruit juice can affect metabolism in some patients.'],
    counsellingPoints: [
      'Take it at the same time each day.',
      'Report swelling of the ankles or face.',
    ],
    learningPoints: ['Peripheral oedema is common and may not be allergic.', 'Long half-life supports once-daily dosing.'],
    examinationPearls: ['Dihydropyridine CCBs more strongly vasodilate than depress cardiac contractility.', 'Useful for hypertension and angina.'],
    brands: [],
    manufacturers: [],
    references: ['Cardiovascular pharmacology references'],
    reviewStatus: 'requires-review',
    lastReviewedAt: null,
  },
  {
    id: 'albendazole',
    genericName: 'Albendazole',
    synonyms: ['Albenza'],
    drugClass: 'Benzimidazole anthelmintic',
    therapeuticCategories: ['Anthelmintic'],
    overview:
      'Albendazole is used for a range of helminth infections and acts by inhibiting microtubule polymerisation in parasites.',
    mechanismOfAction:
      'It interferes with parasite microtubule formation, impairing glucose uptake and causing parasite death.',
    indications: ['Roundworm', 'Hookworm', 'Whipworm', 'Tapeworm infections', 'Hydatid disease'],
    dosageForms: ['Tablets', 'Oral suspension'],
    pharmacokinetics: {
      absorption: 'Oral bioavailability is improved when taken with food.',
      metabolism: 'Extensively metabolised in the liver.',
      elimination: 'Metabolites are excreted in urine and bile.',
    },
    adverseEffects: ['Abdominal discomfort', 'Nausea', 'Elevated liver enzymes', 'Headache'],
    contraindicationsAndPrecautions: [
      'Avoid in pregnancy unless the clinical benefit clearly outweighs risk.',
      'Use cautiously in liver disease.',
    ],
    interactions: ['May interact with other hepatotoxic medicines or antacids depending on the clinical context.'],
    counsellingPoints: ['Take with food if prescribed to improve absorption.', 'Report severe abdominal pain, jaundice, or persistent vomiting.'],
    learningPoints: ['Important antihelminthic in school health and public health settings.', 'Food can improve absorption.'],
    examinationPearls: ['Albendazole is a benzimidazole anthelmintic with broad-spectrum activity.', 'It is often used when single-dose therapy is not sufficient.'],
    brands: [],
    manufacturers: [],
    references: ['WHO antiparasitic references'],
    reviewStatus: 'requires-review',
    lastReviewedAt: null,
  },
  {
    id: 'loratadine',
    genericName: 'Loratadine',
    synonyms: ['Claritin'],
    drugClass: 'Second-generation antihistamine',
    therapeuticCategories: ['Antihistamine'],
    overview:
      'Loratadine is a non-sedating antihistamine used for allergic rhinitis and urticaria.',
    mechanismOfAction:
      'It reversibly blocks peripheral H1 receptors, reducing histamine-mediated allergic symptoms while producing less central sedation than first-generation antihistamines.',
    indications: ['Allergic rhinitis', 'Chronic urticaria', 'Itchy allergic symptoms'],
    dosageForms: ['Tablets', 'Syrup'],
    pharmacokinetics: {
      metabolism: 'Metabolised in the liver to an active metabolite.',
      elimination: 'Mostly excreted in urine and faeces.',
    },
    adverseEffects: ['Headache', 'Dry mouth', 'Drowsiness in some patients'],
    contraindicationsAndPrecautions: [
      'Use caution in severe liver disease.',
      'Avoid combining with other sedating medicines when possible.',
    ],
    interactions: ['May have additive sedating effects with other CNS depressants or sedating antihistamines.'],
    counsellingPoints: ['Take once daily as directed.', 'Report unusual drowsiness or persistent dry mouth.'],
    learningPoints: ['Second-generation antihistamines aim to reduce sedation.', 'Useful for allergic symptoms with less CNS impact than chlorpheniramine.'],
    examinationPearls: ['Loratadine is generally less sedating than first-generation antihistamines.', 'H1 receptor antagonism is central to allergy symptom control.'],
    brands: [],
    manufacturers: [],
    references: ['Allergy pharmacology references'],
    reviewStatus: 'requires-review',
    lastReviewedAt: null,
  },
  {
    id: 'salbutamol',
    genericName: 'Salbutamol',
    synonyms: ['Albuterol'],
    drugClass: 'Short-acting beta-2 agonist',
    therapeuticCategories: ['Respiratory', 'Bronchodilator'],
    overview:
      'Salbutamol is a bronchodilator used to relieve bronchospasm in asthma and chronic obstructive pulmonary disease.',
    mechanismOfAction:
      'It selectively activates beta-2 adrenergic receptors in bronchial smooth muscle, increasing intracellular cyclic AMP and producing bronchodilation.',
    indications: ['Acute bronchospasm', 'Asthma reliever', 'COPD exacerbation symptom relief'],
    dosageForms: ['Inhaler', 'Nebuliser solution'],
    dosing: [
      'Use the lowest effective dose needed for symptom relief and rescue therapy as directed by the label or prescriber.',
      'The inhaled dose and frequency depend on the device, asthma plan, and symptom pattern.',
      'Repeated use without improvement should prompt review of technique and control plans.',
    ],
    storageAndAdministration: [
      'Store below moderate room temperatures and protect the inhaler from moisture and direct heat.',
      'Prime and shake inhalers as directed before first use or after periods of non-use.',
      'Rinse the mouth after inhaled corticosteroid use when applicable, but this differs by product and regimen.',
    ],
    pharmacokinetics: {
      absorption: 'Rapidly absorbed after inhalation.',
      elimination: 'Mostly metabolised and excreted in urine.',
    },
    adverseEffects: ['Tremor', 'Palpitations', 'Anxiety', 'Tachycardia'],
    contraindicationsAndPrecautions: [
      'Use with care in patients with tachyarrhythmias or severe cardiovascular disease.',
      'Tolerance or overuse can reduce effectiveness over time.',
    ],
    interactions: ['Other sympathomimetics may add cardiovascular effects.', 'Beta-blockers may blunt bronchodilation.'],
    counsellingPoints: [
      'Use the inhaler technique correctly.',
      'Seek medical assessment if symptoms are frequent or worsening.',
    ],
    learningPoints: ['Reliever medicine, not controller in many asthma plans.', 'Short-acting beta-2 agonist is rapid onset.'],
    examinationPearls: ['Salbutamol acts mainly on beta-2 receptors and is useful for acute bronchospasm.', 'Excessive use can indicate poor control.'],
    brands: ['Ventolin', 'Airomir', 'Salbutamol inhaler'],
    manufacturers: [],
    references: ['Respiratory pharmacology references: https://www.ginaasthma.org/'],
    reviewStatus: 'requires-review',
    lastReviewedAt: null,
  },
]

export const medicineIndex = Object.fromEntries(medicines.map((medicine) => [medicine.id, medicine])) as Record<string, Medicine>

export const searchMedicines = (query: string) => {
  const normalized = query.trim().toLowerCase()

  if (!normalized) {
    return medicines.slice(0, 6)
  }

  const matches = medicines.filter((medicine) => {
    const haystacks = [
      medicine.genericName,
      medicine.drugClass,
      medicine.therapeuticCategories.join(' '),
      medicine.synonyms.join(' '),
      medicine.brands.join(' '),
      medicine.manufacturers.join(' '),
      medicine.id,
    ].join(' ').toLowerCase()

    const similarity = (term: string) => {
      if (term.includes(normalized)) return true
      if (normalized.length > 2 && term.startsWith(normalized.slice(0, 2))) return true
      return false
    }

    return haystacks.includes(normalized) || medicine.indications.some((item) => similarity(item.toLowerCase()))
  })

  return matches.length ? matches : []
}
