# Pharmaclopedia

Pharmaclopedia is a medicine intelligence and pharmacology learning MVP built for pharmacy students and healthcare learners. It focuses on structured medicine information, guided teaching, comparison, quizzes, and revision in a polished, mobile-friendly interface.

## Core features
- Search for medicines, drug classes, and therapeutic categories
- View structured medicine profiles with safety and learning sections
- Use the demonstration tutor in multiple teaching modes
- Watch curated educational video recommendations
- Compare medicines side by side
- Complete a quiz and review explanations

## Local development
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
```

## Testing
```bash
.\node_modules\.bin\vitest.cmd run --reporter=verbose
```

## Safety and data policy
This MVP is educational and does not replace professional medical advice, prescribing guidance, or clinical judgment. The app uses a curated dataset and makes uncertainty clear when information is absent or not yet verified.

## Future AI integration
A future live AI provider can be added behind a secure server-side endpoint. No API key is required for the demonstration mode.
