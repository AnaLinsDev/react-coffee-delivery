# Coffee Delivery

A React-based project for managing and visualizing coffee delivery orders, focusing on a clean design, reusable components, and efficient routing.

# _________________
### Tools
- **TypeScript** – Adds static typing to JavaScript.
- **Styled-components** – Enables writing CSS directly inside JavaScript files.
- **React-router-dom** – Provides navigation and routing between pages without reloading.
- **ESLint** – A code analysis tool that helps maintain consistent coding styles.
- **Vite** – A fast development build tool that improves performance and offers instant Hot Module Replacement (HMR).

# _________________
### Folder Structure
```bash
react-coffee-delivery/
├─ public/
│
├─ src/
│  ├─ assets/
│  ├─ components/
│  ├─ layouts/
│  ├─ pages/
│  ├─ App.tsx
│  └─ main.tsx
│
├─ index.html
├─ package.json
├─ package-lock.json
├─ tsconfig.node.json
├─ tsconfig.json
├─ tsconfig.app.json
├─ vite.config.ts
├─ eslint.config.js
├─ README.md
└─ .gitignore
```
# _________________
### Commands

#### Clone Repo
```bash
git clone https://github.com/AnaLinsDev/react-coffee-delivery.git
cd react-coffee-delivery
```

#### Install Depndencies
```bash
npm install
```

#### Run the development server
```bash
npm run dev
```
# _________________
### Study Notes
#### Configure Router básico:

1 - Crie o arquivo routes.ts
    Nele, utilize os componentes <Routes> e <Route> para definir cada rota, especificando o path e o componente que será renderizado.

2 - Adicione o componente de rotas ao App.tsx
    Importe o componente criado em routes.ts e o utilize como retorno do <App>.

3 - Configure o BrowserRouter no main.tsx
    Envolva o <App> com o <BrowserRouter> para habilitar o sistema de rotas na aplicação.

# _

#### Configure Theme + Styles básico:

1 - Crie a const defaultTheme em default.ts

2 - Crie a GlobalStyle em globals.ts usando o createGlobalStyle
    Ele será o estilo geral do app.

3 - Crie o arquivo styles.d.ts
    Ele sobrescreve a interface DefaultTheme com o tipo do seu tema.

4 - No App.tsx importe o ThemeProvider e GlobalStyle
    - Colocar ThemeProvider ao redor do App e usar defaultTheme
    - Usar o GlobalStyle no mesmo nível do Routes

