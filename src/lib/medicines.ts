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
    reviewStatus: 'reviewed',
    lastReviewedAt: '2026-10-29',
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
    reviewStatus: 'reviewed',
    lastReviewedAt: '2026-10-29',
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
    reviewStatus: 'reviewed',
    lastReviewedAt: '2026-10-29',
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
    dosing: [
      'Adults typically take a once-daily dose as prescribed, with the exact dose depending on the blood pressure or angina plan.',
      'Dose adjustment may be needed in older adults or those with hepatic impairment. ',
      'The lowest effective dose should be used and reviewed regularly. ',
    ],
    storageAndAdministration: [
      'Store in a cool, dry place away from heat and moisture.',
      'Take at the same time each day unless otherwise advised by the prescriber.',
      'Report ankle swelling, severe dizziness, or chest discomfort promptly.',
    ],
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
    brands: ['Norvasc'],
    manufacturers: [],
    references: ['Cardiovascular pharmacology references', 'WHO essential medicines references'],
    reviewStatus: 'reviewed',
    lastReviewedAt: '2026-10-29',
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
    dosing: [
      'Adults usually take once daily as directed by the label or prescriber.',
      'Paediatric dosing depends on age and formulation, and should follow product guidance or prescriber instructions.',
    ],
    storageAndAdministration: [
      'Store in a cool, dry place away from heat and moisture.',
      'Take once daily, with or without food as directed.',
      'Seek review if symptoms persist or worsen despite treatment.',
    ],
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
    brands: ['Claritin'],
    manufacturers: [],
    references: ['Allergy pharmacology references', 'WHO essential medicines references'],
    reviewStatus: 'reviewed',
    lastReviewedAt: '2026-10-29',
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
    reviewStatus: 'reviewed',
    lastReviewedAt: '2026-10-29',
  },
  {
    id: 'azithromycin',
    genericName: 'Azithromycin',
    synonyms: ['Zithromax', 'Azitro'],
    drugClass: 'Macrolide antibiotic',
    therapeuticCategories: ['Antibiotic', 'Respiratory'],
    overview:
      'Azithromycin is a macrolide antibiotic commonly used for respiratory infections, some sexually transmitted infections, and selected other bacterial infections.',
    mechanismOfAction:
      'It binds to the 50S ribosomal subunit of susceptible bacteria and inhibits bacterial protein synthesis, preventing growth and replication of the organism.',
    indications: ['Upper respiratory tract infections', 'Community-acquired pneumonia', 'Chlamydia in selected regimens', 'Some sexually transmitted infections'],
    dosageForms: ['Tablets', 'Oral suspension', 'Powder for suspension'],
    dosing: [
      'Adult dosing depends on the indication, severity, and local prescribing guidance.',
      'Paediatric dosing is weight-based and should follow an approved regimen or clinician instructions.',
      'Short-course regimens are commonly used for many community infections, but exact timing matters.',
    ],
    storageAndAdministration: [
      'Store in a cool, dry place away from direct sunlight and moisture.',
      'Shake oral suspension before each dose and use a measured dosing device.',
      'Complete the prescribed course unless told otherwise by a clinician.',
    ],
    pharmacokinetics: {
      absorption: 'Well absorbed after oral dosing, with food having little effect on absorption.',
      metabolism: 'Metabolised in the liver to a limited extent.',
      elimination: 'Excreted mainly in bile and urine.',
    },
    adverseEffects: ['Nausea', 'Diarrhoea', 'Abdominal discomfort', 'QT prolongation in susceptible patients'],
    contraindicationsAndPrecautions: [
      'Use with caution in patients with significant cardiac conduction abnormalities or electrolyte disturbances.',
      'Avoid or review interactions with medicines that prolong the QT interval.',
    ],
    interactions: ['Azithromycin may interact with medicines that prolong QT, such as certain antiarrhythmics and fluoroquinolones.', 'Antacids can alter absorption of some formulations.'],
    counsellingPoints: [
      'Take the full prescribed course even if symptoms improve early.',
      'Report palpitations, fainting, or severe diarrhoea promptly.',
    ],
    learningPoints: ['Useful for respiratory and some STI infections.', 'It is often prescribed as a short-course therapy.'],
    examinationPearls: ['Azithromycin is a macrolide with a long tissue half-life and a convenient dosing schedule.', 'It is important to consider QT risk and drug interactions.'],
    brands: ['Zithromax', 'Azitro'],
    manufacturers: [],
    references: ['WHO Model List of Essential Medicines', 'Clinical pharmacology references'],
    reviewStatus: 'reviewed',
    lastReviewedAt: '2026-10-29',
  },
  {
    id: 'ceftriaxone',
    genericName: 'Ceftriaxone',
    synonyms: ['Rocephin'],
    drugClass: 'Third-generation cephalosporin',
    therapeuticCategories: ['Antibiotic', 'Beta-lactam'],
    overview:
      'Ceftriaxone is a parenteral third-generation cephalosporin used for serious bacterial infections, including some meningitis and severe community-acquired infections.',
    mechanismOfAction:
      'It inhibits bacterial cell wall synthesis by binding to penicillin-binding proteins, disrupting the formation of the peptidoglycan layer and leading to bacterial lysis.',
    indications: ['Severe bacterial infections', 'Meningitis', 'Septicemia', 'Some gonococcal infections'],
    dosageForms: ['Injection', 'Powder for injection'],
    dosing: [
      'Dose and frequency depend on the infection site, pathogen, age, and renal or hepatic status.',
      'IV or IM dosing is often used in hospital-based care.',
      'Needs careful review when there is severe renal impairment or biliary disease.',
    ],
    storageAndAdministration: [
      'Store as directed on the product label, usually below controlled room temperatures and away from light when required.',
      'Administer only under appropriate clinical supervision for injectable therapy.',
      'Monitor for adverse reactions during and after administration.',
    ],
    pharmacokinetics: {
      absorption: 'Given parenterally for reliable systemic exposure.',
      distribution: 'Widely distributed into body fluids and tissues, including the meninges in inflamed states.',
      metabolism: 'Minimal hepatic metabolism.',
      elimination: 'Eliminated mainly in bile and urine.',
    },
    adverseEffects: ['Injection site pain', 'Diarrhoea', 'Allergic reactions', 'Elevated liver enzymes'],
    contraindicationsAndPrecautions: [
      'Avoid in severe beta-lactam allergy.',
      'Use with caution in neonates, biliary disease, and severe renal impairment.',
    ],
    interactions: ['Probenecid may reduce renal excretion of some cephalosporins and alter levels.', 'Use caution with concurrent nephrotoxic medicines.'],
    counsellingPoints: [
      'This is usually prescribed under medical supervision and not for self-treatment.',
      'Report rash, severe diarrhoea, or wheezing immediately.',
    ],
    learningPoints: ['Broad-spectrum cephalosporin used for serious infections.', 'Parenteral route is common in acute inpatient care.'],
    examinationPearls: ['Ceftriaxone is a third-generation cephalosporin with good gram-negative coverage.', 'It is often used when oral therapy is not appropriate.'],
    brands: ['Rocephin'],
    manufacturers: [],
    references: ['WHO essential medicines references', 'Clinical infectious diseases pharmacology references'],
    reviewStatus: 'requires-review',
    lastReviewedAt: null,
  },
  {
    id: 'ciprofloxacin',
    genericName: 'Ciprofloxacin',
    synonyms: ['Cipro'],
    drugClass: 'Fluoroquinolone antibiotic',
    therapeuticCategories: ['Antibiotic', 'Urinary'],
    overview:
      'Ciprofloxacin is a fluoroquinolone antibiotic used for certain urinary, respiratory, and gastrointestinal infections when appropriate and guided by local protocols.',
    mechanismOfAction:
      'It inhibits bacterial DNA gyrase and topoisomerase IV, interfering with DNA replication and repair in susceptible bacteria.',
    indications: ['Urinary tract infections', 'Some respiratory infections', 'Diarrhoeal infections in selected cases', 'Bone and joint infections in some regimens'],
    dosageForms: ['Tablets', 'Oral suspension', 'Intravenous solution'],
    dosing: [
      'Dose and duration are indication-specific and should follow the prescription or the product label.',
      'Adjustments may be needed in renal impairment.',
      'Avoid using as first-line therapy in some uncomplicated infections when safer alternatives exist.',
    ],
    storageAndAdministration: [
      'Store away from heat, moisture, and direct sunlight.',
      'Take with plenty of water and avoid lying down immediately after the dose if advised.',
      'Complete the full course unless a clinician tells you otherwise.',
    ],
    pharmacokinetics: {
      absorption: 'Well absorbed from the gastrointestinal tract.',
      metabolism: 'Partially metabolised in the liver.',
      elimination: 'Excreted in urine and faeces.',
    },
    adverseEffects: ['Nausea', 'Diarrhoea', 'Dizziness', 'Tendinopathy in susceptible patients'],
    contraindicationsAndPrecautions: [
      'Use with caution in patients with history of tendinopathy or QT-prolonging medicines.',
      'Avoid in pregnancy unless benefits clearly outweigh risks.',
    ],
    interactions: ['May interact with antacids, iron, and some other metal-containing products.', 'Some medicines may increase the risk of QT prolongation or CNS effects.'],
    counsellingPoints: [
      'Report tendon pain, swelling, or severe diarrhoea promptly.',
      'Avoid taking with iron, calcium, or magnesium preparations unless advised.',
    ],
    learningPoints: ['Broad-spectrum fluoroquinolone used for several serious bacterial infections.', 'Atypical adverse effects include tendon issues and QT risk.'],
    examinationPearls: ['Ciprofloxacin is a DNA gyrase inhibitor.', 'It is useful for many gram-negative infections but should be used carefully because of resistance and adverse effects.'],
    brands: ['Cipro'],
    manufacturers: [],
    references: ['WHO essential medicines references', 'Clinical infectious disease guidelines'],
    reviewStatus: 'requires-review',
    lastReviewedAt: null,
  },
  {
    id: 'hydrochlorothiazide',
    genericName: 'Hydrochlorothiazide',
    synonyms: ['HCTZ'],
    drugClass: 'Thiazide diuretic',
    therapeuticCategories: ['Antihypertensive', 'Diuretic'],
    overview:
      'Hydrochlorothiazide is a thiazide diuretic used in hypertension and sometimes for oedema associated with fluid retention disorders.',
    mechanismOfAction:
      'It inhibits sodium-chloride cotransport in the distal convoluted tubule, increasing sodium and water excretion and reducing blood volume and blood pressure.',
    indications: ['Hypertension', 'Oedema', 'Fluid retention in selected conditions'],
    dosageForms: ['Tablets'],
    dosing: [
      'The usual dose varies by indication and patient factors such as age and renal function.',
      'Monitoring of electrolytes is important when used long term or with other antihypertensives.',
    ],
    storageAndAdministration: [
      'Store in a cool, dry place away from moisture and heat.',
      'Take as prescribed, often in the morning to reduce sleep disruption from increased urination.',
      'Follow clinician guidance on blood pressure monitoring and laboratory checks.',
    ],
    pharmacokinetics: {
      absorption: 'Well absorbed orally.',
      metabolism: 'Not significantly metabolised.',
      elimination: 'Excreted mainly unchanged in urine.',
    },
    adverseEffects: ['Hypokalaemia', 'Dehydration', 'Increased urination', 'Dizziness'],
    contraindicationsAndPrecautions: [
      'Use with caution in hyponatraemia, hypokalaemia, or gout.',
      'Monitor for electrolyte disturbances in renal impairment or with concurrent diuretics.',
    ],
    interactions: ['May interact with lithium and medicines causing electrolyte imbalance.', 'It can increase the risk of hypokalaemia with corticosteroids or other diuretics.'],
    counsellingPoints: [
      'Report muscle cramps, weakness, or dizziness.',
      'Maintain adequate hydration and discuss any prescribed monitoring.',
    ],
    learningPoints: ['Useful in hypertension and fluid retention.', 'Electrolyte monitoring is a key exam point.'],
    examinationPearls: ['Hydrochlorothiazide acts in the distal convoluted tubule.', 'It can cause hypokalaemia, hyponatraemia, and hyperuricaemia.'],
    brands: [],
    manufacturers: [],
    references: ['Cardiovascular pharmacology references', 'WHO essential medicines references'],
    reviewStatus: 'requires-review',
    lastReviewedAt: null,
  },
  {
    id: 'omeprazole',
    genericName: 'Omeprazole',
    synonyms: ['Prilosec'],
    drugClass: 'Proton pump inhibitor',
    therapeuticCategories: ['Gastrointestinal', 'Acid suppression'],
    overview:
      'Omeprazole is a proton pump inhibitor used to reduce gastric acid secretion in reflux disease, peptic ulcer disease, and selected acid-related conditions.',
    mechanismOfAction:
      'It irreversibly inhibits the gastric H+/K+ ATPase enzyme system in parietal cells, suppressing the final step of acid secretion.',
    indications: ['Gastroesophageal reflux', 'Peptic ulcer disease', 'Dyspepsia', 'Helicobacter pylori combination therapy'],
    dosageForms: ['Capsules', 'Tablets', 'Oral suspension'],
    dosing: [
      'Dosing depends on the indication, severity, and local prescribing guidelines.',
      'Many regimens involve once-daily dosing and short to moderate treatment courses.',
    ],
    storageAndAdministration: [
      'Store in a cool, dry place away from heat and moisture.',
      'Take as directed, often before meals when prescribed for acid-related conditions.',
      'Report persistent abdominal symptoms or black stools promptly.',
    ],
    pharmacokinetics: {
      absorption: 'Well absorbed after oral administration.',
      metabolism: 'Metabolised in the liver by CYP2C19 and CYP3A4.',
      elimination: 'Excreted in urine and faeces.',
    },
    adverseEffects: ['Headache', 'Nausea', 'Diarrhoea', 'Bloating'],
    contraindicationsAndPrecautions: [
      'Use with caution in severe liver disease and long-term therapy concerns.',
      'Long-term use may require review of nutritional and bone-related issues in some patients.',
    ],
    interactions: ['May interact with clopidogrel and some antiretroviral medicines depending on the drug combination.', 'It can affect absorption of some medicines by altering gastric pH.'],
    counsellingPoints: [
      'Take the medicine exactly as directed and do not stop without professional advice.',
      'Report severe abdominal pain, black stools, or persistent vomiting.',
    ],
    learningPoints: ['Proton pump inhibitor that suppresses gastric acid secretion.', 'Often used for reflux and ulcer-related disorders.'],
    examinationPearls: ['Omeprazole irreversibly inhibits the H+/K+ ATPase pump.', 'It is a key acid-suppressing agent in gastrointestinal pharmacology.'],
    brands: ['Prilosec'],
    manufacturers: [],
    references: ['Gastrointestinal pharmacology references', 'WHO essential medicines references'],
    reviewStatus: 'requires-review',
    lastReviewedAt: null,
  },
  {
    id: 'losartan',
    genericName: 'Losartan',
    synonyms: ['Cozaar'],
    drugClass: 'Angiotensin II receptor blocker',
    therapeuticCategories: ['Antihypertensive', 'Cardiovascular'],
    overview:
      'Losartan is an angiotensin II receptor blocker used to lower blood pressure and reduce cardiovascular risk in suitable patients.',
    mechanismOfAction:
      'It selectively blocks angiotensin II type 1 receptors, reducing vasoconstriction and aldosterone-mediated sodium retention.',
    indications: ['Hypertension', 'Cardiovascular risk reduction in selected patients', 'Diabetic nephropathy support in some regimens'],
    dosageForms: ['Tablets'],
    dosing: [
      'Dosing is guided by blood pressure goals, kidney function, and individual patient factors.',
      'Renal impairment may require dose adjustment and monitoring.',
    ],
    storageAndAdministration: [
      'Store at room temperature away from moisture and heat.',
      'Take once daily or as instructed by the prescriber.',
      'Monitor blood pressure and hydration status, especially when starting or adjusting doses.',
    ],
    pharmacokinetics: {
      absorption: 'Well absorbed orally with active metabolite formation after first-pass metabolism.',
      metabolism: 'Converted by liver enzymes to an active metabolite.',
      elimination: 'Excreted in urine and faeces.',
    },
    adverseEffects: ['Dizziness', 'Hypotension', 'Hyperkalaemia', 'Headache'],
    contraindicationsAndPrecautions: [
      'Avoid in pregnancy and use carefully in severe renal impairment.',
      'Monitor potassium and blood pressure when combined with other antihypertensives or diuretics.',
    ],
    interactions: ['Potassium-sparing medicines and NSAIDs may increase the risk of hyperkalaemia or renal issues.', 'Additive hypotension can occur with other blood pressure medicines.'],
    counsellingPoints: [
      'Report dizziness, fainting, or swelling of the face or lips.',
      'Avoid prescription or non-prescription products that raise potassium without medical advice.',
    ],
    learningPoints: ['ARB rather than ACE inhibitor, often used where cough is a concern.', 'Important role in hypertension and kidney protection.'],
    examinationPearls: ['Losartan blocks AT1 receptors and reduces aldosterone effects.', 'It is often preferred in patients who cannot tolerate ACE inhibition.'],
    brands: ['Cozaar'],
    manufacturers: [],
    references: ['Cardiovascular pharmacology references', 'WHO essential medicines references'],
    reviewStatus: 'requires-review',
    lastReviewedAt: null,
  },
  {
    id: 'furosemide',
    genericName: 'Furosemide',
    synonyms: ['Lasix'],
    drugClass: 'Loop diuretic',
    therapeuticCategories: ['Diuretic', 'Cardiovascular'],
    overview:
      'Furosemide is a loop diuretic used to reduce fluid overload, oedema, and sometimes hypertension in selected patients.',
    mechanismOfAction:
      'It inhibits the Na+/K+/2Cl− cotransporter in the thick ascending limb of the loop of Henle, increasing sodium and water excretion.',
    indications: ['Oedema', 'Heart failure related fluid retention', 'Hypertension in selected cases'],
    dosageForms: ['Tablets', 'Injection', 'Oral solution'],
    dosing: [
      'Dosing varies by severity of fluid overload, renal function, and individual response.',
      'Careful monitoring is needed in patients with dehydration or electrolyte disturbance.',
    ],
    storageAndAdministration: [
      'Store in a cool, dry place away from heat and moisture.',
      'Take as prescribed, often in the morning when used for oedema or blood pressure control.',
      'Watch for signs of excessive fluid loss and electrolyte imbalance.',
    ],
    pharmacokinetics: {
      absorption: 'Variable oral absorption; intravenous form produces rapid diuresis.',
      metabolism: 'Minimal hepatic metabolism.',
      elimination: 'Excreted mostly unchanged in urine.',
    },
    adverseEffects: ['Hypokalaemia', 'Dehydration', 'Hypotension', 'Hyponatraemia'],
    contraindicationsAndPrecautions: [
      'Use with caution in severe dehydration, electrolyte abnormalities, and renal impairment.',
      'Monitor blood pressure, urine output, and electrolytes regularly when used for chronic conditions.',
    ],
    interactions: ['May increase the risk of electrolyte abnormalities with other diuretics and some antihypertensives.', 'NSAIDs may blunt diuretic effect and affect renal function.'],
    counsellingPoints: [
      'Report muscle weakness, cramps, severe thirst, or dizziness.',
      'Do not stop or increase the dose without medical advice.',
    ],
    learningPoints: ['Fast-acting loop diuretic used for marked fluid overload.', 'Electrolyte and volume monitoring are essential.'],
    examinationPearls: ['Furosemide acts at the thick ascending limb of the loop of Henle.', 'It strongly increases sodium and water excretion.'],
    brands: ['Lasix'],
    manufacturers: [],
    references: ['Cardiovascular pharmacology references', 'WHO essential medicines references'],
    reviewStatus: 'requires-review',
    lastReviewedAt: null,
  },
  {
    id: 'insulin-glargine',
    genericName: 'Insulin Glargine',
    synonyms: ['Lantus', 'Basaglar'],
    drugClass: 'Long-acting insulin analogue',
    therapeuticCategories: ['Antidiabetic', 'Hormone'],
    overview:
      'Insulin glargine is a long-acting basal insulin used to provide background insulin coverage in type 1 and type 2 diabetes when required by the treatment plan.',
    mechanismOfAction:
      'It provides a steady basal insulin effect with a low, prolonged release profile, helping maintain basal glucose control between meals and overnight.',
    indications: ['Type 1 diabetes mellitus', 'Type 2 diabetes mellitus in selected regimens'],
    dosageForms: ['Injection solution'],
    dosing: [
      'Dose is individualised based on glucose control, body weight, and clinical guidance.',
      'It is usually administered once daily, though regimens vary by patient need.',
      'Dose adjustments require careful review when there are changes in diet, exercise, or illness.',
    ],
    storageAndAdministration: [
      'Store as directed on the product label, typically refrigerated before first use and then as specified for the product.',
      'Use a new needle for each injection and rotate injection sites to reduce local reactions.',
      'Do not mix with other insulins unless specifically directed by a prescriber.',
    ],
    pharmacokinetics: {
      absorption: 'Slow absorption with a prolonged duration of action.',
      metabolism: 'Metabolised in the liver and peripheral tissues.',
      elimination: 'Cleared via enzymatic degradation.',
    },
    adverseEffects: ['Hypoglycaemia', 'Injection site reactions', 'Weight gain'],
    contraindicationsAndPrecautions: [
      'Use with caution in patients at high risk of hypoglycaemia or when there are major changes in eating patterns.',
      'Dose needs careful monitoring during illness, exercise, or renal impairment.',
    ],
    interactions: ['Many drugs can augment or diminish hypoglycaemic effects, including oral antidiabetics and some systemic corticosteroids.', 'Alcohol may increase the risk of hypoglycaemia in susceptible patients.'],
    counsellingPoints: [
      'Follow the prescribed dose and administration schedule precisely.',
      'Learn to recognise symptoms of hypoglycaemia and know what to do if they occur.',
    ],
    learningPoints: ['Basal insulin designed for steady background control.', 'Hypoglycaemia risk is a major practical concern.'],
    examinationPearls: ['Insulin glargine has a long duration of action and is used as a basal insulin.', 'It should not be confused with rapid-acting insulins.'],
    brands: ['Lantus', 'Basaglar'],
    manufacturers: [],
    references: ['Diabetes pharmacology references', 'WHO essential medicines references'],
    reviewStatus: 'requires-review',
    lastReviewedAt: null,
  },
  {
    id: 'glibenclamide',
    genericName: 'Glibenclamide',
    synonyms: ['Glyburide'],
    drugClass: 'Sulfonylurea',
    therapeuticCategories: ['Antidiabetic'],
    overview:
      'Glibenclamide is a sulfonylurea used to stimulate insulin release in type 2 diabetes when additional glucose lowering is needed and appropriate.',
    mechanismOfAction:
      'It closes ATP-sensitive potassium channels in pancreatic beta cells, promoting insulin secretion and reducing blood glucose.',
    indications: ['Type 2 diabetes mellitus'],
    dosageForms: ['Tablets'],
    dosing: [
      'Dose is individualised according to response and risk of hypoglycaemia.',
      'Lower doses may be needed in older adults or in patients with reduced kidney function.',
    ],
    storageAndAdministration: [
      'Store in a cool, dry place away from heat and moisture.',
      'Take as prescribed and avoid missing doses or taking extra doses.',
      'Monitor blood glucose trends when starting or changing treatment.',
    ],
    pharmacokinetics: {
      absorption: 'Well absorbed orally.',
      metabolism: 'Metabolised in the liver.',
      elimination: 'Excreted in urine and bile.',
    },
    adverseEffects: ['Hypoglycaemia', 'Weight gain', 'Nausea'],
    contraindicationsAndPrecautions: [
      'Use with caution in severe renal or hepatic impairment and in older adults.',
      'Hypoglycaemia risk is higher when meals are skipped or after intense exercise.',
    ],
    interactions: ['Additive hypoglycaemia risk with insulin or other antihyperglycaemics.', 'Some drugs can alter glucose metabolism and affect response.'],
    counsellingPoints: [
      'Know the symptoms of hypoglycaemia and avoid skipping meals.',
      'Report persistent nausea, sweating, or confusion promptly.',
    ],
    learningPoints: ['Sulfonylurea that stimulates pancreatic insulin secretion.', 'Risk of hypoglycaemia is a key safety issue.'],
    examinationPearls: ['Glibenclamide acts by stimulating beta-cell insulin release.', 'Patients must be counselled about hypoglycaemia risk.'],
    brands: ['Daonil', 'Glyburide'],
    manufacturers: [],
    references: ['Diabetes pharmacology references', 'WHO essential medicines references'],
    reviewStatus: 'requires-review',
    lastReviewedAt: null,
  },
  {
    id: 'diclofenac',
    genericName: 'Diclofenac',
    synonyms: ['Voltaren'],
    drugClass: 'Non-steroidal anti-inflammatory drug',
    therapeuticCategories: ['Analgesic', 'Anti-inflammatory'],
    overview:
      'Diclofenac is a non-steroidal anti-inflammatory drug used for pain relief, inflammation, and some musculoskeletal conditions when appropriate and guided by the dosing regimen.',
    mechanismOfAction:
      'It inhibits cyclooxygenase enzymes, reducing prostaglandin synthesis and thereby decreasing pain, inflammation, and fever.',
    indications: ['Pain', 'Inflammation', 'Arthritis', 'Musculoskeletal conditions'],
    dosageForms: ['Tablets', 'Capsules', 'Topical gel', 'Injection'],
    dosing: [
      'Dosing varies by formulation, patient factors, and indication.',
      'The lowest effective dose for the shortest duration is generally preferred.',
      'Renal and gastrointestinal risk should be considered, especially in older adults.',
    ],
    storageAndAdministration: [
      'Store in a cool, dry place away from heat and moisture.',
      'Take with or after food when directed to reduce stomach irritation.',
      'Do not exceed the prescribed dose or duration.',
    ],
    pharmacokinetics: {
      absorption: 'Well absorbed after oral dosing.',
      metabolism: 'Metabolised in the liver.',
      elimination: 'Excreted in urine and bile.',
    },
    adverseEffects: ['Gastrointestinal irritation', 'Nausea', 'Headache', 'Fluid retention'],
    contraindicationsAndPrecautions: [
      'Avoid in patients with active peptic ulcer disease, significant renal impairment, or allergy to NSAIDs.',
      'Use with caution in older adults and those with cardiovascular disease.',
    ],
    interactions: ['May increase bleeding risk with anticoagulants or antiplatelet agents.', 'NSAIDs may reduce the effectiveness of some antihypertensives and increase renal risk.'],
    counsellingPoints: [
      'Take with food if directed, and avoid alcohol excess.',
      'Report black stools, vomiting blood, or severe abdominal pain promptly.',
    ],
    learningPoints: ['NSAID with analgesic and anti-inflammatory effects.', 'Risk of gastrointestinal and renal effects is important.'],
    examinationPearls: ['Diclofenac inhibits COX-1 and COX-2, reducing prostaglandin synthesis.', 'It is useful but requires caution in renal and GI risk groups.'],
    brands: ['Voltaren'],
    manufacturers: [],
    references: ['Analgesic pharmacology references', 'WHO essential medicines references'],
    reviewStatus: 'reviewed',
    lastReviewedAt: '2026-10-29',
  },
  {
    id: 'ibuprofen',
    genericName: 'Ibuprofen',
    synonyms: ['Advil', 'Nurofen'],
    drugClass: 'Non-steroidal anti-inflammatory drug',
    therapeuticCategories: ['Analgesic', 'Anti-inflammatory'],
    overview:
      'Ibuprofen is an NSAID used for pain, fever, and inflammation in many common conditions.',
    mechanismOfAction:
      'It inhibits cyclooxygenase enzymes, reducing prostaglandin synthesis and thereby decreasing pain, inflammation, and fever.',
    indications: ['Pain', 'Fever', 'Inflammation', 'Dysmenorrhoea', 'Musculoskeletal pain'],
    dosageForms: ['Tablets', 'Capsules', 'Suspension', 'Topical gel'],
    dosing: [
      'Adults should use the lowest effective dose for the shortest duration, as directed on the label or prescription.',
      'Children’s dosing varies with age, weight, and formulation.',
      'Regular dosing is not appropriate for all patients; review renal and gastrointestinal risk.',
    ],
    storageAndAdministration: [
      'Store in a cool, dry place away from moisture and heat.',
      'Take with food or after meals if directed to reduce stomach irritation.',
      'Do not exceed the maximum recommended dose.',
    ],
    pharmacokinetics: {
      absorption: 'Well absorbed after oral dosing.',
      metabolism: 'Metabolised in the liver.',
      elimination: 'Excreted largely in urine and faeces.',
    },
    adverseEffects: ['Gastrointestinal irritation', 'Nausea', 'Headache', 'Oedema'],
    contraindicationsAndPrecautions: [
      'Avoid or use with caution in active peptic ulcer disease, severe kidney disease, or NSAID allergy.',
      'Use carefully in older adults, heart failure, or with blood thinners.',
    ],
    interactions: ['May increase bleeding risk with anticoagulants or antiplatelet medicines.', 'NSAIDs may reduce the effect of some antihypertensives and increase renal risk.'],
    counsellingPoints: ['Take with food if directed.', 'Report black stools, vomiting blood, or severe stomach pain immediately.'],
    learningPoints: ['Common NSAID with analgesic and anti-inflammatory effects.', 'Risk of GI and renal adverse effects is important in practice.'],
    examinationPearls: ['Ibuprofen inhibits COX enzymes and reduces prostaglandin synthesis.', 'It is a commonly used analgesic, but GI and renal caution are essential.'],
    brands: ['Advil', 'Nurofen'],
    manufacturers: [],
    references: ['Analgesic pharmacology references', 'WHO essential medicines references'],
    reviewStatus: 'reviewed',
    lastReviewedAt: '2026-10-29',
  },
  {
    id: 'doxycycline',
    genericName: 'Doxycycline',
    synonyms: ['Vibramycin'],
    drugClass: 'Tetracycline antibiotic',
    therapeuticCategories: ['Antibiotic', 'Infectious disease'],
    overview:
      'Doxycycline is a broad-spectrum tetracycline antibiotic used for several bacterial infections and some zoonotic or atypical infections when appropriate.',
    mechanismOfAction:
      'It inhibits bacterial protein synthesis by binding to the 30S ribosomal subunit, preventing attachment of aminoacyl-tRNA and slowing bacterial growth.',
    indications: ['Respiratory infections', 'Skin and soft tissue infections', 'Bronchitis in selected cases', 'Some sexually transmitted infections'],
    dosageForms: ['Tablets', 'Capsules', 'Syrup'],
    dosing: [
      'Dosing depends on the indication, patient age, and prescriber instructions.',
      'It is commonly given once or twice daily depending on the regimen.',
      'Dose adjustments are considered in severe liver disease and special populations.',
    ],
    storageAndAdministration: [
      'Store in a cool, dry place away from moisture and heat.',
      'Take with a full glass of water and remain upright for a short period if directed.',
      'Complete the prescribed course unless advised otherwise.',
    ],
    pharmacokinetics: {
      absorption: 'Well absorbed after oral dosing.',
      metabolism: 'Metabolised to a limited extent in the liver.',
      elimination: 'Excreted largely in bile and urine.',
    },
    adverseEffects: ['Nausea', 'Photosensitivity', 'Diarrhoea', 'Esophagitis'],
    contraindicationsAndPrecautions: [
      'Avoid in pregnancy and in children younger than the age guidance for tetracyclines unless specifically indicated.',
      'Use with caution in liver disease and with iron, calcium, or magnesium preparations.',
    ],
    interactions: ['Calcium, iron, and magnesium can reduce absorption.', 'May increase sensitivity to sunlight in susceptible patients.'],
    counsellingPoints: ['Take with water and avoid lying down immediately after the dose.', 'Use sun protection and report severe diarrhoea or chest pain.'],
    learningPoints: ['Tetracycline antibiotic with good tissue penetration.', 'Important counselling point is to avoid binding with calcium-rich foods or supplements.'],
    examinationPearls: ['Doxycycline inhibits bacterial protein synthesis at the 30S ribosomal subunit.', 'It is often used for respiratory and selected infections, but photosensitivity matters.'],
    brands: ['Vibramycin'],
    manufacturers: [],
    references: ['WHO Model List of Essential Medicines', 'Clinical infectious disease references'],
    reviewStatus: 'reviewed',
    lastReviewedAt: '2026-10-29',
  },
  {
    id: 'metronidazole',
    genericName: 'Metronidazole',
    synonyms: ['Flagyl'],
    drugClass: 'Nitroimidazole antibiotic and antiprotozoal',
    therapeuticCategories: ['Antibiotic', 'Antiprotozoal'],
    overview:
      'Metronidazole is used for anaerobic bacterial infections and some protozoal infections, particularly when a clinician has selected it for the condition.',
    mechanismOfAction:
      'It is reduced by anaerobic organisms and protozoa to active metabolites that disrupt DNA synthesis and damage the organism.',
    indications: ['Anaerobic infections', 'Giardiasis', 'Amoebiasis', 'Trichomoniasis'],
    dosageForms: ['Tablets', 'Suspension', 'Injection'],
    dosing: [
      'The dose varies by indication, severity, and age.',
      'Short courses are common for protozoal infections, while longer courses may be used for anaerobic infections.',
      'Renal or hepatic impairment may require prescribing review.',
    ],
    storageAndAdministration: [
      'Store in a cool, dry place away from moisture and heat.',
      'Take exactly as prescribed and finish the course unless told otherwise.',
      'Avoid alcohol during therapy and for the recommended period after the final dose if advised.',
    ],
    pharmacokinetics: {
      absorption: 'Well absorbed after oral dosing.',
      metabolism: 'Metabolised in the liver.',
      elimination: 'Excreted in urine and faeces.',
    },
    adverseEffects: ['Nausea', 'Metallic taste', 'Headache', 'GI upset'],
    contraindicationsAndPrecautions: [
      'Use with caution in severe liver disease and during pregnancy unless clearly needed.',
      'Avoid alcohol when additional instructions advise it during therapy.',
    ],
    interactions: ['Alcohol may cause severe nausea or disulfiram-like reactions in some patients.', 'Caution with medicines that affect the nervous system or central adverse effects.'],
    counsellingPoints: ['Complete the prescribed course.', 'Report severe nausea, dizziness, or numbness.'],
    learningPoints: ['Useful for anaerobic infections and gut protozoal infections.', 'A unique counselling point is the alcohol interaction in some regimens.'],
    examinationPearls: ['Metronidazole is active against anaerobes and protozoa.', 'It is a common anti-infective with a distinctive disulfiram-like interaction with alcohol.'],
    brands: ['Flagyl'],
    manufacturers: [],
    references: ['WHO essential medicines references', 'Clinical infectious disease references'],
    reviewStatus: 'reviewed',
    lastReviewedAt: '2026-10-29',
  },
  {
    id: 'atenolol',
    genericName: 'Atenolol',
    synonyms: ['Tenormin'],
    drugClass: 'Beta-1 selective blocker',
    therapeuticCategories: ['Antihypertensive', 'Cardiovascular'],
    overview:
      'Atenolol is a beta-1 selective blocker used to lower blood pressure and manage some cardiac conditions when clinically appropriate.',
    mechanismOfAction:
      'It blocks beta-1 adrenergic receptors in the heart, reducing heart rate, contractility, and cardiac output, which lowers blood pressure and reduces myocardial oxygen demand.',
    indications: ['Hypertension', 'Angina', 'Some arrhythmia management'],
    dosageForms: ['Tablets'],
    dosing: [
      'Dose is individualised based on the indication and clinician guidance.',
      'Lower doses or careful review may be needed in older adults or those with renal impairment.',
    ],
    storageAndAdministration: [
      'Store in a cool, dry place away from heat and moisture.',
      'Take as prescribed, often once daily.',
      'Report unusual fatigue, dizziness, or slow heart rate.',
    ],
    pharmacokinetics: {
      absorption: 'Well absorbed orally.',
      metabolism: 'Limited hepatic metabolism.',
      elimination: 'Excreted largely unchanged in urine.',
    },
    adverseEffects: ['Bradycardia', 'Fatigue', 'Dizziness', 'Cold extremities'],
    contraindicationsAndPrecautions: [
      'Use with caution in asthma or severe reactive airway disease.',
      'Avoid abrupt cessation without clinician advice.',
    ],
    interactions: ['Additive bradycardic effects can occur with other rate-limiting medicines.', 'Non-dihydropyridine calcium channel blockers may also influence heart rate.'],
    counsellingPoints: ['Do not stop the medicine suddenly without advice.', 'Report marked fatigue, slow pulse, or breathing difficulties.'],
    learningPoints: ['Cardioselective beta blocker used in hypertension and angina.', 'It carries bradycardia and fatigue warnings.'],
    examinationPearls: ['Atenolol is beta-1 selective and lowers heart rate and cardiac output.', 'It may worsen asthma because even beta-1 selective agents can have some non-selective effects in overdose or high doses.'],
    brands: ['Tenormin'],
    manufacturers: [],
    references: ['Cardiovascular pharmacology references', 'WHO essential medicines references'],
    reviewStatus: 'reviewed',
    lastReviewedAt: '2026-10-29',
  },
  {
    id: 'simvastatin',
    genericName: 'Simvastatin',
    synonyms: ['Zocor'],
    drugClass: 'HMG-CoA reductase inhibitor',
    therapeuticCategories: ['Lipid-lowering', 'Cardiovascular'],
    overview:
      'Simvastatin is a statin used to lower LDL cholesterol and reduce cardiovascular risk in suitable patients.',
    mechanismOfAction:
      'It inhibits HMG-CoA reductase, reducing hepatic cholesterol synthesis and increasing LDL clearance from the circulation.',
    indications: ['Hypercholesterolaemia', 'Cardiovascular risk reduction in selected patients'],
    dosageForms: ['Tablets'],
    dosing: [
      'Dose varies by cholesterol target, patient risk, and clinician guidance.',
      'Careful review is needed with interacting medicines and with liver disease concerns.',
    ],
    storageAndAdministration: [
      'Store in a cool, dry place away from heat and moisture.',
      'Take as prescribed, often in the evening unless otherwise advised.',
      'Report muscle pain or weakness promptly.',
    ],
    pharmacokinetics: {
      absorption: 'Absorbed from the gut, then converted to active metabolites.',
      metabolism: 'Metabolised in the liver by CYP3A4.',
      elimination: 'Excreted in bile and urine.',
    },
    adverseEffects: ['Myalgia', 'Liver enzyme elevation', 'Headache', 'GI upset'],
    contraindicationsAndPrecautions: [
      'Avoid in active liver disease and in some interacting drug combinations.',
      'Use with caution in older adults and in patients with renal impairment.',
    ],
    interactions: ['Many medicines can increase statin exposure, including some azoles and macrolides.', 'Grapefruit and related products can affect metabolism in some settings.'],
    counsellingPoints: ['Report muscle pain, weakness, or dark urine promptly.', 'Follow clinician advice on monitoring and dose adjustments.'],
    learningPoints: ['Statin used to lower LDL cholesterol.', 'Myopathy and liver safety are key counselling points.'],
    examinationPearls: ['Simvastatin inhibits HMG-CoA reductase in the liver.', 'It is a common cholesterol-lowering medicine with important drug-interaction considerations.'],
    brands: ['Zocor'],
    manufacturers: [],
    references: ['Cardiovascular pharmacology references', 'WHO essential medicines references'],
    reviewStatus: 'reviewed',
    lastReviewedAt: '2026-10-29',
  },
  {
    id: 'cefalexin',
    genericName: 'Cefalexin',
    synonyms: ['Keflex'],
    drugClass: 'First-generation cephalosporin',
    therapeuticCategories: ['Antibiotic', 'Beta-lactam'],
    overview:
      'Cefalexin is a first-generation cephalosporin used for common bacterial infections such as skin and soft tissue infections and some respiratory and urinary infections.',
    mechanismOfAction:
      'It inhibits bacterial cell wall synthesis by binding penicillin-binding proteins, causing cell lysis in susceptible organisms.',
    indications: ['Skin and soft tissue infections', 'Respiratory tract infections', 'Urinary tract infections', 'Bone and joint infections in selected cases'],
    dosageForms: ['Capsules', 'Tablets', 'Oral suspension'],
    dosing: [
      'Dose and interval depend on the type of infection, age, renal function, and prescriber guidance.',
      'Paediatric dosing is often weight-based.',
    ],
    storageAndAdministration: [
      'Store in a cool, dry place away from moisture and direct heat.',
      'Shake suspensions before use and use the measuring device provided.',
      'Complete the prescribed course.',
    ],
    pharmacokinetics: {
      absorption: 'Well absorbed after oral dosing.',
      metabolism: 'Minimal hepatic metabolism.',
      elimination: 'Excreted unchanged in urine.',
    },
    adverseEffects: ['Diarrhoea', 'Nausea', 'Rash', 'Allergic reactions'],
    contraindicationsAndPrecautions: [
      'Avoid in severe beta-lactam allergy.',
      'Use with caution in severe renal impairment.',
    ],
    interactions: ['May interact with medicines that affect gut flora or cause additional nephrotoxicity.', 'Caution with other antibiotics and antimicrobial combinations when clinically relevant.'],
    counsellingPoints: ['Take the full course even if symptoms improve early.', 'Report rash, swelling, or severe diarrhoea promptly.'],
    learningPoints: ['First-generation cephalosporin used for common bacterial infections.', 'Good for skin and respiratory infections when sensitive organisms are likely.'],
    examinationPearls: ['Cefalexin is a first-generation cephalosporin with gram-positive coverage and some gram-negative activity.', 'Allergy status is important before use.'],
    brands: ['Keflex'],
    manufacturers: [],
    references: ['WHO essential medicines references', 'Clinical infectious disease references'],
    reviewStatus: 'reviewed',
    lastReviewedAt: '2026-10-29',
  },
  {
    id: 'prednisone',
    genericName: 'Prednisone',
    synonyms: ['Deltasone'],
    drugClass: 'Corticosteroid',
    therapeuticCategories: ['Anti-inflammatory', 'Immunosuppressant'],
    overview:
      'Prednisone is a systemic corticosteroid used for inflammatory, allergic, and some autoimmune conditions when prescribed and monitored appropriately.',
    mechanismOfAction:
      'It binds glucocorticoid receptors and alters gene expression, producing broad anti-inflammatory and immunosuppressive effects.',
    indications: ['Asthma exacerbations', 'Allergic conditions', 'Autoimmune disease flare-ups', 'Inflammatory disorders'],
    dosageForms: ['Tablets', 'Syrup'],
    dosing: [
      'Dose depends on the condition, severity, and clinician plan.',
      'Short courses are common for acute inflammatory conditions; longer courses require closer monitoring.',
    ],
    storageAndAdministration: [
      'Store in a cool, dry place away from moisture and heat.',
      'Take the prescribed dose and do not stop abruptly after prolonged use without medical review.',
      'Follow instructions on timing and tapering when a clinician has recommended this.',
    ],
    pharmacokinetics: {
      absorption: 'Well absorbed after oral dosing.',
      metabolism: 'Metabolised in the liver.',
      elimination: 'Excreted in urine.',
    },
    adverseEffects: ['Mood changes', 'Weight gain', 'Increased appetite', 'Hyperglycaemia'],
    contraindicationsAndPrecautions: [
      'Use with caution in active infection, diabetes, and severe psychiatric illness unless clinically necessary.',
      'Prolonged therapy requires monitoring for suppression and other steroid effects.',
    ],
    interactions: ['May interact with antidiabetic medicines and some anti-infectives depending on the regimen.', 'Use caution with live vaccines and immunosuppressive combinations.'],
    counsellingPoints: ['Do not stop suddenly after long-term use without professional advice.', 'Report mood changes, severe infection symptoms, or worsening blood sugar.'],
    learningPoints: ['Systemic corticosteroid with potent anti-inflammatory effects.', 'Short-term use is common, but long-term effects require caution.'],
    examinationPearls: ['Prednisone is a glucocorticoid that suppresses inflammatory and immune responses.', 'Tapering may be necessary after prolonged therapy.'],
    brands: ['Deltasone'],
    manufacturers: [],
    references: ['Clinical pharmacology references', 'WHO essential medicines references'],
    reviewStatus: 'reviewed',
    lastReviewedAt: '2026-10-29',
  },
  {
    id: 'pantoprazole',
    genericName: 'Pantoprazole',
    synonyms: ['Protonix'],
    drugClass: 'Proton pump inhibitor',
    therapeuticCategories: ['Gastrointestinal', 'Acid suppression'],
    overview:
      'Pantoprazole is a proton pump inhibitor used to reduce gastric acid secretion in reflux, peptic ulcer disease, and selected acid-related conditions.',
    mechanismOfAction:
      'It irreversibly inhibits the gastric H+/K+ ATPase enzyme system in parietal cells, suppressing the final step of acid secretion.',
    indications: ['Gastroesophageal reflux', 'Peptic ulcer disease', 'Dyspepsia', 'Helicobacter pylori combination therapy'],
    dosageForms: ['Tablets', 'Capsules', 'Injection'],
    dosing: [
      'Dose depends on the indication and prescribed regimen.',
      'Once-daily dosing is common for many maintenance and acute symptom regimens.',
    ],
    storageAndAdministration: [
      'Store in a cool, dry place away from heat and moisture.',
      'Take as directed, often before meals when prescribed.',
      'Report persistent abdominal pain, black stools, or vomiting blood.',
    ],
    pharmacokinetics: {
      absorption: 'Well absorbed after oral dosing.',
      metabolism: 'Metabolised in the liver.',
      elimination: 'Excreted in urine and faeces.',
    },
    adverseEffects: ['Headache', 'Nausea', 'Diarrhoea', 'Abdominal discomfort'],
    contraindicationsAndPrecautions: [
      'Use with caution in severe liver disease and long-term therapy planning.',
      'Long-term use may require review of nutritional and bone-related issues in some patients.',
    ],
    interactions: ['May influence the absorption of some medicines by altering gastric pH.', 'It can interact with antiretroviral or antiplatelet regimens depending on the clinical context.'],
    counsellingPoints: ['Take exactly as directed.', 'Report severe abdominal pain or black stools promptly.'],
    learningPoints: ['PPI used for acid suppression in GI disease.', 'Long-term management needs review, especially if symptoms are recurrent.'],
    examinationPearls: ['Pantoprazole irreversibly inhibits the H+/K+ ATPase pump.', 'It is used widely for reflux and ulcer-supportive therapy.'],
    brands: ['Protonix'],
    manufacturers: [],
    references: ['Gastrointestinal pharmacology references', 'WHO essential medicines references'],
    reviewStatus: 'reviewed',
    lastReviewedAt: '2026-10-29',
  },
  {
    id: 'ivermectin',
    genericName: 'Ivermectin',
    synonyms: ['Stromectol'],
    drugClass: 'Anthelmintic',
    therapeuticCategories: ['Anthelmintic', 'Infectious disease'],
    overview:
      'Ivermectin is an antiparasitic medicine used for selected helminth infections and some other parasitic indications when appropriate.',
    mechanismOfAction:
      'It increases parasite membrane permeability to chloride ions, causing paralysis and death of susceptible parasites.',
    indications: ['Strongyloides', 'Onchocerciasis', 'Some helminth infections'],
    dosageForms: ['Tablets', 'Oral suspension'],
    dosing: [
      'Dose is based on indication, body weight, and prescriber guidance.',
      'Special review is needed for patients with severe illness or interacting treatment plans.',
    ],
    storageAndAdministration: [
      'Store in a cool, dry place away from light and moisture.',
      'Take as prescribed and coordinate with any additional treatment instructions.',
      'Seek review if severe adverse effects or worsening symptoms occur.',
    ],
    pharmacokinetics: {
      absorption: 'Absorbed orally, with oral bioavailability varying by formulation and patient context.',
      metabolism: 'Metabolised in the liver.',
      elimination: 'Excreted in bile and faeces.',
    },
    adverseEffects: ['Dizziness', 'Nausea', 'Diarrhoea', 'Rash'],
    contraindicationsAndPrecautions: [
      'Use with caution in severe hepatic disease or in patients with complicated co-infections.',
      'Do not use outside the indication and dosing guidance.',
    ],
    interactions: ['Interactions may be clinically relevant with other medicines affecting the CNS or parasite burden.', 'Use caution when the patient has multiple medications or concurrent infection.'],
    counsellingPoints: ['Take exactly as directed and finish the full course when prescribed.', 'Report severe dizziness, rash, or worsening symptoms promptly.'],
    learningPoints: ['Antiparasitic with a specific mechanism involving chloride channels.', 'Important for helminthic infection management and parasite control.'],
    examinationPearls: ['Ivermectin acts by increasing chloride permeability in parasite cells, causing paralysis.', 'It is used for certain helminth infections, not general symptom relief.'],
    brands: ['Stromectol'],
    manufacturers: [],
    references: ['WHO essential medicines references', 'Clinical parasitology references'],
    reviewStatus: 'reviewed',
    lastReviewedAt: '2026-10-29',
  },
  {
    id: 'amoxicillin-clavulanate',
    genericName: 'Amoxicillin-Clavulanate',
    synonyms: ['Augmentin'],
    drugClass: 'Penicillin with beta-lactamase inhibitor',
    therapeuticCategories: ['Antibiotic', 'Beta-lactam'],
    overview:
      'Amoxicillin-clavulanate is a combination antibiotic used for broader bacterial cover in common infections, including selected respiratory, skin, and dental infections.',
    mechanismOfAction:
      'Amoxicillin inhibits bacterial cell wall synthesis, while clavulanate inhibits beta-lactamase enzymes and helps preserve activity against beta-lactamase-producing organisms.',
    indications: ['Respiratory infections', 'Skin infections', 'Dental infections', 'Selected urinary infections'],
    dosageForms: ['Tablets', 'Suspension', 'Extended-release tablets'],
    dosing: [
      'Dose depends on the condition, age, renal function, and the prescribed formulation.',
      'Paediatric dosing is often weight-based and needs careful follow-up.',
    ],
    storageAndAdministration: [
      'Store in a cool, dry place away from heat and moisture.',
      'Shake oral suspensions before use and use a measured dosing device.',
      'Complete the full course unless a clinician advises otherwise.',
    ],
    pharmacokinetics: {
      absorption: 'Well absorbed orally.',
      metabolism: 'Amoxicillin is minimally metabolised; clavulanate is also primarily handled by renal mechanisms.',
      elimination: 'Both components are mostly excreted in urine.',
    },
    adverseEffects: ['Diarrhoea', 'Nausea', 'Rash', 'Allergic reactions'],
    contraindicationsAndPrecautions: [
      'Avoid in patients with a history of severe beta-lactam allergy.',
      'Use with caution in renal impairment and in those with frequent diarrhoea or liver issues.',
    ],
    interactions: ['May interact with anticoagulants or medicines affecting gut flora.', 'Clavulanate-containing combinations should be used carefully when the patient has renal impairment.'],
    counsellingPoints: ['Take the full prescribed course.', 'Report rash, facial swelling, or persistent diarrhoea promptly.'],
    learningPoints: ['Combination of amoxicillin and a beta-lactamase inhibitor for broader coverage.', 'Important for resistant oral infections and extra coverage against beta-lactamases.'],
    examinationPearls: ['Clavulanate protects amoxicillin from beta-lactamase breakdown.', 'It is often used for resistant community-acquired infections.'],
    brands: ['Augmentin'],
    manufacturers: [],
    references: ['WHO Model List of Essential Medicines', 'Clinical infectious disease references'],
    reviewStatus: 'reviewed',
    lastReviewedAt: '2026-10-29',
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
