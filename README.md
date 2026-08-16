# Bhawit Balodi Portfolio

A premium dark-themed portfolio for a Data Analyst / Machine Learning / AI & GenAI professional, built with React and Vite.

## Tech Stack

- React
- Vite
- JavaScript
- CSS

## Project Structure

```txt
portfolio/
├── public/
│   ├── favicon.svg
│   ├── resume/
│   │   └── README.txt
│   └── assets/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Publication.jsx
│   │   ├── Education.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── public/favicon.svg
```

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open the local Vite URL shown in the terminal.

## Production Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Customization

Edit the content in [src/data/portfolioData.js](src/data/portfolioData.js). This file centralizes:

- Name
- Bio / headline
- Skills
- Experience
- Featured work
- Projects
- Publication
- Education
- Achievements
- Contact links
- Resume path
- Configuration placeholders

To update your own information:

1. Open [src/data/portfolioData.js](src/data/portfolioData.js)
2. Replace the placeholder values with your real data
3. Update the resume location if you add a PDF
4. Update social links and email addresses
5. Adjust colors and layout in [src/index.css](src/index.css)

## Deployment

### GitHub Pages

1. Build the site with `npm run build`
2. Upload the `dist` folder to GitHub Pages or use a static hosting tool

### Vercel

1. Import the project into Vercel
2. Use the default Vite settings
3. Deploy

### Netlify

1. Import the project repository into Netlify
2. Set the build command to `npm run build`
3. Set the publish directory to `dist`

## Notes

- This is a static frontend portfolio and does not require a backend.
- Contact links are intentionally kept simple using email, LinkedIn, and GitHub actions.
- Placeholder values are included where real information is not available so the site remains polished and easy to update.
