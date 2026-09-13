import JSZip from 'jszip';

// Raw string content for all application files
import mainTsxContent from '../main.tsx?raw';
import appTsxContent from '../App.tsx?raw';
import indexCssContent from '../index.css?raw';
import typesTsContent from '../types.ts?raw';
import initialDataContent from '../data/initialData.ts?raw';
import storageTsContent from './storage.ts?raw';
import zipGeneratorTsContent from './zipGenerator.ts?raw';

import headerContent from '../components/Header.tsx?raw';
import heroContent from '../components/Hero.tsx?raw';
import trustBarContent from '../components/TrustBar.tsx?raw';
import aboutContent from '../components/About.tsx?raw';
import missionVisionContent from '../components/MissionVision.tsx?raw';
import academicsContent from '../components/Academics.tsx?raw';
import curriculumModalContent from '../components/CurriculumModal.tsx?raw';
import faithPillarsContent from '../components/FaithPillars.tsx?raw';
import founderContent from '../components/Founder.tsx?raw';
import journeyTimelineContent from '../components/JourneyTimeline.tsx?raw';
import galleryContent from '../components/Gallery.tsx?raw';
import newsSectionContent from '../components/NewsSection.tsx?raw';
import admissionsContent from '../components/Admissions.tsx?raw';
import contactContent from '../components/Contact.tsx?raw';
import footerContent from '../components/Footer.tsx?raw';
import adminModalContent from '../components/AdminModal.tsx?raw';

const gitignoreContent = `# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
.vite-source-tags.js
.vercel
`;

export const generateAndDownloadSourceZip = async () => {
  const zip = new JSZip();

  // 1. Root Configuration & Lock Files
  zip.file('.gitignore', gitignoreContent);

  // Package lock file
  let packageLockString = '';
  try {
    const lockRes = await fetch('/package-lock.json');
    if (lockRes.ok) {
      packageLockString = await lockRes.text();
    }
  } catch (e) {
    console.warn('Could not fetch package-lock.json:', e);
  }

  if (!packageLockString) {
    packageLockString = JSON.stringify({
      "name": "al-mahir-college-dutse",
      "version": "1.0.0",
      "lockfileVersion": 3,
      "requires": true,
      "packages": {
        "": {
          "name": "al-mahir-college-dutse",
          "version": "1.0.0",
          "dependencies": {
            "@tailwindcss/vite": "^4.2.1",
            "framer-motion": "^12.35.0",
            "jszip": "^3.10.1",
            "lucide-react": "^0.577.0",
            "react": "^19.2.0",
            "react-dom": "^19.2.0",
            "react-router-dom": "^7.13.1",
            "tailwindcss": "^4.2.1"
          },
          "devDependencies": {
            "@types/node": "^24.10.1",
            "@types/react": "^19.2.7",
            "@types/react-dom": "^19.2.3",
            "@vitejs/plugin-react": "^5.1.1",
            "typescript": "~5.9.3",
            "vite": "^7.3.1"
          }
        }
      }
    }, null, 2);
  }

  zip.file('package-lock.json', packageLockString);

  zip.file('package.json', JSON.stringify({
    "name": "al-mahir-college-dutse",
    "private": true,
    "version": "1.0.0",
    "type": "module",
    "scripts": {
      "dev": "vite",
      "build": "tsc -b && vite build",
      "lint": "eslint .",
      "preview": "vite preview"
    },
    "dependencies": {
      "@tailwindcss/vite": "^4.2.1",
      "framer-motion": "^12.35.0",
      "jszip": "^3.10.1",
      "lucide-react": "^0.577.0",
      "react": "^19.2.0",
      "react-dom": "^19.2.0",
      "react-router-dom": "^7.13.1",
      "tailwindcss": "^4.2.1"
    },
    "devDependencies": {
      "@types/node": "^24.10.1",
      "@types/react": "^19.2.7",
      "@types/react-dom": "^19.2.3",
      "@vitejs/plugin-react": "^5.1.1",
      "typescript": "~5.9.3",
      "vite": "^7.3.1"
    }
  }, null, 2));

  zip.file('vite.config.ts', `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
`);

  zip.file('tsconfig.json', JSON.stringify({
    "files": [],
    "references": [
      { "path": "./tsconfig.app.json" },
      { "path": "./tsconfig.node.json" }
    ]
  }, null, 2));

  zip.file('tsconfig.app.json', JSON.stringify({
    "compilerOptions": {
      "target": "ES2022",
      "useDefineForClassFields": true,
      "lib": ["ES2022", "DOM", "DOM.Iterable"],
      "module": "ESNext",
      "types": ["vite/client", "node"],
      "skipLibCheck": true,
      "allowJs": true,
      "moduleResolution": "bundler",
      "allowImportingTsExtensions": true,
      "moduleDetection": "force",
      "noEmit": true,
      "jsx": "react-jsx",
      "strict": true,
      "noFallthroughCasesInSwitch": true,
      "baseUrl": ".",
      "paths": {
        "@/*": ["src/*"]
      }
    },
    "include": ["src"]
  }, null, 2));

  zip.file('tsconfig.node.json', JSON.stringify({
    "compilerOptions": {
      "target": "ES2022",
      "lib": ["ES2022"],
      "module": "ESNext",
      "skipLibCheck": true,
      "moduleResolution": "bundler",
      "allowImportingTsExtensions": true,
      "moduleDetection": "force",
      "noEmit": true,
      "strict": true
    },
    "include": ["vite.config.ts"]
  }, null, 2));

  zip.file('index.html', `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AlMahir College Dutse | Knowledge That Builds Character</title>
    <meta name="description" content="AlMahir College Dutse - Primary & Junior Secondary School in Yalwawa Maja, Dutse, Jigawa State, Nigeria." />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`);

  // 2. Source Files (src/)
  zip.file('src/main.tsx', mainTsxContent);
  zip.file('src/App.tsx', appTsxContent);
  zip.file('src/index.css', indexCssContent);
  zip.file('src/types.ts', typesTsContent);
  zip.file('src/data/initialData.ts', initialDataContent);
  zip.file('src/utils/storage.ts', storageTsContent);
  zip.file('src/utils/zipGenerator.ts', zipGeneratorTsContent);

  // Components (src/components/)
  zip.file('src/components/Header.tsx', headerContent);
  zip.file('src/components/Hero.tsx', heroContent);
  zip.file('src/components/TrustBar.tsx', trustBarContent);
  zip.file('src/components/About.tsx', aboutContent);
  zip.file('src/components/MissionVision.tsx', missionVisionContent);
  zip.file('src/components/Academics.tsx', academicsContent);
  zip.file('src/components/CurriculumModal.tsx', curriculumModalContent);
  zip.file('src/components/FaithPillars.tsx', faithPillarsContent);
  zip.file('src/components/Founder.tsx', founderContent);
  zip.file('src/components/JourneyTimeline.tsx', journeyTimelineContent);
  zip.file('src/components/Gallery.tsx', galleryContent);
  zip.file('src/components/NewsSection.tsx', newsSectionContent);
  zip.file('src/components/Admissions.tsx', admissionsContent);
  zip.file('src/components/Contact.tsx', contactContent);
  zip.file('src/components/Footer.tsx', footerContent);
  zip.file('src/components/AdminModal.tsx', adminModalContent);

  // 3. Asset Images (public/)
  const imagePaths = [
    '/favicon.svg',
    '/images/hero-students.jpg',
    '/images/classroom.jpg',
    '/images/quran-learning.jpg',
    '/images/primary-school.jpg',
    '/images/jss-school.jpg',
    '/images/sports-leadership.jpg',
    '/images/school-community.jpg',
    '/images/founder.jpg'
  ];

  for (const path of imagePaths) {
    try {
      const res = await fetch(path);
      if (res.ok) {
        const blob = await res.arrayBuffer();
        // Save relative to zip root (remove leading slash)
        zip.file('public' + path, blob);
      }
    } catch (e) {
      console.warn('Could not bundle asset:', path, e);
    }
  }

  // 4. README.md
  const readmeContent = `# ALMAHIR COLLEGE DUTSE — OFFICIAL WEBSITE SOURCE CODE

## Overview
This zip archive contains the complete production source code for **AlMahir College Dutse**, located in Yalwawa Maja, Dutse, Jigawa State, Nigeria.

- **School Motto**: Knowledge For Moral Building
- **Core Message**: Knowledge That Builds Character
- **Levels**: Primary & Junior Secondary School
- **Established**: August 25, 2016
- **Founder**: Sheikh Muhammad Jamiu Sulaiman (Chief Imam of Yoruba Mosque)

---

## 🛠️ Tech Stack & Features
- **Frontend**: React 19 + TypeScript + Vite + Tailwind CSS v4
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Admin CMS**: Self-contained client-side CMS with local storage persistence
- **Source Export**: Built-in JSZip project generator

---

## 🚀 Installation & Local Development

1. **Unzip the Source Package**:
   \`\`\`bash
   unzip al-mahir-college-website.zip
   cd al-mahir-college-website
   \`\`\`

2. **Install Dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

3. **Start Development Server**:
   \`\`\`bash
   npm run dev
   \`\`\`
   Open your browser at \`http://localhost:5173\`.

---

## 📦 Building for Production

To create an optimized production build for deployment:
\`\`\`bash
npm run build
\`\`\`
The compiled files will be output to the \`dist/\` directory.

---

## 🔒 Security & Admin Setup

- **Admin Login Endpoint**: Accessible via footer/nav "Admin Portal" or \`#admin\` trigger.
- **Default Admin Credentials**:
  - **Username**: \`admin\`
  - **Default Password**: \`almahir2026#admin\`

---

© 2026 AlMahir College Dutse. All Rights Reserved.
Website developed by Panthera Digital.
`;

  zip.file('README.md', readmeContent);

  // 5. Generate Blob and Trigger Download
  const content = await zip.generateAsync({ type: 'blob' });
  const element = document.createElement('a');
  element.href = URL.createObjectURL(content);
  element.download = 'al-mahir-college-website.zip';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};
