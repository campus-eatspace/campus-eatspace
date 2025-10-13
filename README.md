<<<<<<< HEAD
# Campus Eats

Campus Eats is a food delivery platform built for **Redeemer’s University**.  
It connects **students, vendors, riders, and admins** in one seamless platform, making food ordering and delivery easy, fast, and transparent.

## Features

**Landing Page** – User-friendly homepage showcasing vendors & meals  
**Vendor Portal** – Vendors can upload menus, manage orders, and track sales  
**Rider Portal** – Riders see delivery requests and track assigned orders  
**Student Portal** – Students can browse vendors, order meals, and track delivery  
**Admin Portal** – Manage users, vendors, orders, commissions, and reports  
**Analytics & SLA Tracking** – Vendor performance, commissions, and order metrics  

## 🛠 Tech Stack
**Frontend:** HTML, CSS, JavaScript  
**Backend:** Node.js (Express)  
**Database:** Supabase (PostgreSQL)  
**Version Control:** Git + GitHub  

## Project Structure
campus-eats/
│── index.html # Landing page
│── README.md # Documentation
│
├── assets/ # Images, logos
├── css/ # Stylesheets
│ └── style.css
├── js/ # JavaScript files
│ └── app.js
├── vendor/ # Vendor portal
│ └── vendor.html
├── customer/ # Student portal
│ └── customer.html
├── admin/ # Admin portal
│ └── admin.html


## Getting Started
1. Clone the repository:
   git clone https://github.com/campus-eats-prog/campus-eats.git
=======
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
>>>>>>> bd35a728b2d52305dbb0a43e34f6a025de01ee05
