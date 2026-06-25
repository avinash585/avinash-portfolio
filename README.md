# Avinash's Portfolio

A modern, interactive personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS. Showcasing professional experience, projects, skills, and achievements with a sleek glass-morphism UI design.

## ✨ Features

- **Responsive Design** - Fully responsive and optimized for all device sizes
- **Glass-Morphism UI** - Modern glass card components with smooth animations
- **Command Palette** - Quick navigation and command execution
- **Smooth Scrolling** - Scroll progress indicator and smooth section transitions
- **Custom Cursor** - Interactive custom cursor experience
- **Multiple Sections** - Comprehensive portfolio sections including:
  - Hero section with introduction
  - About & professional summary
  - Experience timeline
  - Skills showcase
  - Projects portfolio
  - Certifications
  - Achievements
  - ServiceNow journey
  - Contact terminal
- **Terminal-Style Contact** - Interactive contact form with terminal aesthetic
- **Performance Optimized** - Built with Vite for optimal performance
- **Code Quality** - ESLint integration for consistent code style

## 🛠️ Tech Stack

- **Frontend Framework**: React 18+ with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + PostCSS
- **Linting**: ESLint
- **Package Manager**: npm/yarn

## 📦 Installation

1. **Clone or extract the repository**
   ```bash
   cd "Avinash's Portfolio"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AssistantWidget.tsx
│   ├── CommandPalette.tsx
│   ├── CustomCursor.tsx
│   ├── GlassCard.tsx
│   ├── Header.tsx
│   └── ScrollProgress.tsx
├── sections/           # Major portfolio sections
│   ├── About.tsx
│   ├── Achievements.tsx
│   ├── Certifications.tsx
│   ├── ContactTerminal.tsx
│   ├── Experience.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   ├── ServiceNowJourney.tsx
│   └── Skills.tsx
├── data/              # Static data and configuration
│   └── portfolio.ts
├── utils/             # Utility functions
│   ├── assets.ts
│   └── navigation.ts
├── styles/            # Global styles
│   └── index.css
├── App.tsx           # Main application component
└── main.tsx          # Entry point
```

## 🎨 Components

### Core Components

- **GlassCard** - Reusable glass-morphism card component
- **Header** - Navigation header with command palette integration
- **CommandPalette** - Quick search and navigation command interface
- **CustomCursor** - Interactive custom cursor effects
- **ScrollProgress** - Visual scroll position indicator
- **AssistantWidget** - AI assistant companion widget
- **Section** - Wrapper component for portfolio sections

### Portfolio Sections

Each section is a self-contained component showcasing different aspects of the portfolio:

- **Hero** - Eye-catching introduction
- **About** - Professional background
- **Experience** - Work history and roles
- **Skills** - Technical and professional skills
- **Projects** - Showcased projects and work samples
- **Certifications** - Professional certifications
- **Achievements** - Notable accomplishments
- **ServiceNowJourney** - ServiceNow platform experience
- **ContactTerminal** - Contact form with terminal UI

## 🚀 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🎯 Configuration Files

- **vite.config.ts** - Vite build configuration
- **tsconfig.json** - TypeScript configuration
- **tailwind.config.js** - Tailwind CSS customization
- **postcss.config.js** - PostCSS processing setup
- **eslint.config.js** - Code linting rules

## 📱 Responsive Design

The portfolio is fully responsive with optimized layouts for:
- Desktop (1920px and above)
- Laptop (1440px - 1919px)
- Tablet (768px - 1439px)
- Mobile (below 768px)

## 🔧 Customization

### Update Portfolio Data

Edit `src/data/portfolio.ts` to customize:
- Personal information
- Experience timeline
- Skills and proficiencies
- Projects and portfolio items
- Certifications
- Social links

### Styling

- Global styles are in `src/styles/index.css`
- Tailwind CSS configuration in `tailwind.config.js`
- Component-specific styles use Tailwind classes

### Navigation

Update navigation configuration in `src/utils/navigation.ts` to modify:
- Menu items
- Section routing
- Navigation labels

## 📝 License

This project is personal work. Feel free to use it as inspiration for your own portfolio.

## 👤 Author

**Avinash** - Full Stack Developer & Cloud Architect

---

**Built with ❤️ and modern web technologies**
