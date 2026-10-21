# Pharmaclopedia AGENTS.md

## Project overview
Pharmaclopedia is a medicine-intelligence and pharmacology-learning MVP for pharmacy students in Nigeria, with a path toward broader African and international use. The product focuses on structured medicine information, guided learning, comparison, quizzes, and video-assisted study without requiring registration or API access.

## Product vision
"Find it. Understand it. Master it."

The core journey is SEARCH → UNDERSTAND → WATCH → COMPARE → TEST → REVISE. The project prioritises trustworthy medicine information, educational framing, and safe usage messaging over generic chatbot UX.

## Technology stack
- Vite
- React
- TypeScript
- Tailwind CSS
- React Router
- Lucide React
- Vitest + Testing Library

## Architecture
- Frontend-only MVP with curated data files kept in version control.
- Medicine metadata lives in structured TypeScript data modules.
- Quiz and lesson content are deterministic and aligned with reviewed content.
- Live AI integration should be isolated behind a provider abstraction, but the default experience works without any credentials.
- The user-facing app remains usable in no-key mode.

## Directory structure
- src/lib — medicine, tutor, and quiz logic
- src/data — video registry and structured datasets
- src/types — shared app types
- src/test — automated tests
- docs/ — product and deployment guidance

## Coding conventions
- Prefer clear, readable, component-based UI.
- Use TypeScript types for medicine and lesson data.
- Avoid fake clinical claims or invented references.
- Keep the interface explicit when data is unavailable or requires review.
- Maintain accessible labels and mobile-first layout quality.

## Data-model decisions
The medicine schema includes generic name, synonyms, class, therapeutic categories, overview, mechanism, indications, formulations, pharmacokinetics where available, adverse effects, safety notes, interactions, counselling points, learning points, examination pearls, references, and review metadata.

## Medicine-data quality requirements
- Never invent clinical facts, local brands, regulatory approvals, prices, or stock details.
- Distinguish structured reference data from tutor explanations.
- If a field is absent or unverified, omit it or say it has not been verified.
- Use the product’s safety disclaimer consistently.

## AI provider architecture
- Provider abstraction should be added behind a server-side pattern in the future.
- This MVP uses deterministic demonstration-mode tutor content when no live provider is configured.
- No API keys are exposed in browser code.
- Live provider logic should be isolated behind a server endpoint and error handling.

## Demonstration-mode behaviour
- Demonstration mode is explicit and labeled as such.
- The tutor uses structured data and guided lessons rather than pretending to be a live model.
- It supports teaching modes and revision flows without external credentials.

## Video integration rules
- Videos must be curated and relevant to medicine and learning objective.
- Embedded content is allowed only for valid, reviewable sources.
- Unavailable or blocked embeds fall back to the source link and explanatory text.
- Do not claim to summarise a video’s actual content unless it has been reviewed properly.

## Safety requirements
- Educational-only messaging.
- No diagnosis or treatment decisions for specific patients.
- Clear statement that the product does not replace professional medical advice.
- All learning content must remain evidence-grounded and transparent.

## Development commands
- npm install
- npm run dev
- npm run build
- npm run test:run

## Testing commands
- .\node_modules\.bin\vitest.cmd run --reporter=verbose
- .\node_modules\.bin\vite.cmd build

## Current implementation status
- Seeded medicine catalog and search work.
- Medicine profiles and guided teaching flow are implemented.
- Demonstration tutor is active without credentials.
- Comparison and quiz flows are available for the curated dataset.
- Vite production build succeeds.

## Known issues
- The MVP uses a curated, small dataset rather than a full Nigerian regulatory database.
- Video recommendations are intentionally limited to reviewed curated entries.
- Live AI provider integration remains future work behind a secure server endpoint.

## Outstanding tasks
- Expand and review the curated medicine dataset.
- Add more medicine-specific quizzes and deeper revision flows.
- Implement secure server-side AI provider proxy when an external provider is approved.
- Add richer educational video review policies and quality controls.

## Deployment notes
- This is a static frontend app that can be deployed to Vercel, Netlify, GitHub Pages, or a similar static host.
- No secrets or API keys are needed for the current demonstration experience.
- Any future live AI provider must be configured server-side and never exposed to the browser.
