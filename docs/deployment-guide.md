# Deployment guide

## Static frontend deployment
The app is a Vite React frontend and can be deployed as a static site.

1. Install dependencies: npm install
2. Build the app: npm run build
3. Deploy the generated dist folder to the hosting platform of choice.

## Suggested deployment targets
- Vercel
- Netlify
- GitHub Pages

## Requirements for live AI later
When a live AI provider is added in the future, the API request should go through a secure backend endpoint. Never expose provider keys in the browser bundle.
