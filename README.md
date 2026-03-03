# Portfolio React

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features full Arabic/English language support with RTL layout switching.

## Features

- ⚛️ **React 18** with TypeScript
- 🎨 **Tailwind CSS** for styling
- 🌐 **i18next** for internationalization (Arabic/English)
- 🔄 **RTL Support** - Automatic layout direction switching
- 📱 **Fully Responsive** - Mobile-first design
- 🖼️ **Image Slider** - Touch-enabled project image carousels
- ⚡ **Vite** - Fast development and build tool

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Navigate to the project directory
cd portfolio-react

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
portfolio-react/
├── src/
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── ImageSlider.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── i18n/
│   │   ├── locales/
│   │   │   ├── ar.json
│   │   │   └── en.json
│   │   └── i18n.ts
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Customization

### Personal Information

Edit the translation files in `src/i18n/locales/`:

- `en.json` - English translations
- `ar.json` - Arabic translations

Update your name, description, email, and other personal details.

### Projects

Edit `src/components/Projects.tsx` to add, remove, or modify projects:

1. Update the `projects` array with your project data
2. Add corresponding translations in both locale files
3. Replace placeholder images with your actual screenshots

### Styling

- Global styles: `src/index.css`
- Tailwind configuration: `tailwind.config.js`
- Component-specific styles: Within each component using Tailwind classes

## Language Support

The app supports English and Arabic with automatic RTL switching:

- Click the language toggle button in the navbar
- Language preference is saved in localStorage
- RTL layout automatically applies for Arabic

## License

MIT
