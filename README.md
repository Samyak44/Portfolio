# Samyak's Portfolio

A modern portfolio website built with Next.js, featuring 3D graphics powered by Three.js and smooth animations with Framer Motion.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Animations**: Framer Motion
- **Forms**: EmailJS
- **Icons**: React Icons

## Features

- 🎨 Modern and responsive design
- 🌐 3D interactive elements (Computer, Earth, Stars, Tech Balls)
- ✉️ Contact form with EmailJS integration
- 📱 Mobile-friendly navigation
- 🎯 Smooth scroll animations
- 💼 Project showcase with detailed descriptions
- 📊 Work experience timeline
- 🔧 Tech stack visualization

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
```

This will create an optimized static export in the `out` directory.

## Deployment

The project is configured for GitHub Pages deployment with static export.

To deploy:

```bash
npm run deploy
```

This will build the project and deploy it to the `gh-pages` branch.

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── layout.js        # Root layout
│   ├── page.js          # Home page
│   └── globals.css      # Global styles
├── components/          # React components
│   ├── canvas/         # Three.js 3D components
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Experience.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── Tech.jsx
│   └── Works.jsx
├── constants/           # Constants and data
├── hoc/                # Higher-order components
├── utils/              # Utility functions
├── public/             # Static assets
│   ├── assets/        # Images and icons
│   ├── desktop_pc/    # 3D model (Computer)
│   └── planet/        # 3D model (Earth)
└── styles.js          # Tailwind utility classes

```

## EmailJS Configuration

To set up the contact form:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update the credentials in `components/Contact.jsx`:
   - Service ID
   - Template ID
   - Public Key

## License

This project is open source and available under the MIT License.

## Contact

Samyak - [Your Email]

Portfolio: [https://shresthasamyak.com.np](https://shresthasamyak.com.np)
